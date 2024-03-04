/* eslint-disable react-refresh/only-export-components */
import { graphql } from 'gql.tada';
import { createContext, useContext, useEffect, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { User } from './types/user';
import { flushSync } from 'react-dom';

export const CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
			image
			_id
			projects {
				title
				_id
			}
			articles {
				title
				_id
			}
			likedArticles {
				title
				_id
			}
		}
	}
`);

export const LOGOUT = graphql(`
	mutation Logout {
		logout {
			loggedOut
		}
	}
`);

const CHECK_AUTHENTICATION = graphql(`
	query CheckAuthentication {
		checkAuthentication {
			cookieIsPresent
		}
	}
`);

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
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>({} as User);
	const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);
	const [isLoading, setIsLoading] = useState<boolean>(true);
	const [withNav, setWithNav] = useState<boolean>(true);

	useQuery(CURRENT_USER, {
		skip: !isLoggedIn,
		onCompleted: (data) => {
			flushSync(() => {
				setUser(data?.currentUser);
				setIsLoading(false);
			});
		},
	});

	const { loading, error, data: checkData } = useQuery(CHECK_AUTHENTICATION);

	useEffect(() => {
		if (!loading && !error && checkData && checkData.checkAuthentication?.cookieIsPresent) {
			setIsLoggedIn(true);
		} else {
			setIsLoggedIn(false);
		}
	}, [loading, error, checkData]);

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

	if (loading) return <p>Loading...</p>;
	if (error) {
		console.error('Error checking authentication:', error);
		return <p>Error checking authentication. Please try again later.</p>;
	}

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
