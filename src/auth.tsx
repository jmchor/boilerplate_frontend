/* eslint-disable react-refresh/only-export-components */
import { createContext, useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { User } from './types/user';
import { flushSync } from 'react-dom';
import { AUTH_CURRENT_USER, CHECK_AUTHENTICATION } from './gql/queries';
import { LOGOUT } from './gql/mutations';

export interface AuthContext {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: User | null;
	setUser: React.Dispatch<React.SetStateAction<User | null>>;
	isLoggingOut: boolean;
	setIsLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
	isLoading: boolean;
	withNav: boolean;
	setWithNav: React.Dispatch<React.SetStateAction<boolean>>;
	cookieLoading: boolean;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>({} as User);
	const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [withNav, setWithNav] = useState<boolean>(true);

	const { startPolling } = useQuery(AUTH_CURRENT_USER, {
		onCompleted: (data) => {
			flushSync(() => {
				setUser(data?.currentUser);
				setIsLoading(false);
			});
		},
	});

	const {
		loading: cookieLoading,
		data: checkData,
		startPolling: startPolling2,
	} = useQuery(CHECK_AUTHENTICATION, {
		onCompleted: (data) => {
			if (data?.checkAuthentication?.cookieIsPresent) {
				flushSync(() => {
					startPolling(1000);
					setIsLoggedIn(true);
				});
			}
		},
	});

	useEffect(() => {
		startPolling2(1000);
		startPolling(1000);
	}, []);

	const [logout] = useMutation(LOGOUT, {
		onCompleted: () => {
			setIsLoggedIn(false);
			setIsLoggingOut(false);
		},
	});

	useEffect(() => {
		if (isLoggingOut) {
			logout();
		}
	}, [isLoggingOut, logout]);

	// if (loading) return <p>Loading...</p>;
	// if (error) {
	// 	console.error('Error checking authentication:', error);
	// 	return <p>Error checking authentication. Please try again later.</p>;
	// }

	return (
		<AuthContext.Provider
			value={{
				isLoggedIn,
				setIsLoggedIn,
				user,
				setUser,
				isLoggingOut,
				setIsLoggingOut,
				isLoading,
				withNav,
				setWithNav,
				cookieLoading,
			}}
		>
			{children}
		</AuthContext.Provider>
	);
};

export const useAuth = () => {
	const context = useContext(AuthContext);
	if (!context) {
		throw new Error('useAuth must be used within an AuthProvider');
	}
	return context;
};
