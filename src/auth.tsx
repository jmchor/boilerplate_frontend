import { graphql } from 'gql.tada';
import { createContext, useContext, useState } from 'react';
import { useMutation, useQuery } from '@apollo/client';
import { User } from './types/user';

export const CURRENT_USER = graphql(`
	query CurrentUser {
		currentUser {
			username
			email
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

export interface AuthContext {
	isLoggedIn: boolean;
	setIsLoggedIn: React.Dispatch<React.SetStateAction<boolean>>;
	user: User | null;
	setUser: (user: User | null) => void;
	isLoggingOut: boolean;
	setIsLoggingOut: React.Dispatch<React.SetStateAction<boolean>>;
}

const AuthContext = createContext<AuthContext | null>(null);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
	const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);
	const [user, setUser] = useState<User | null>({} as User);
	const [isLoggingOut, setIsLoggingOut] = useState<boolean>(false);

	const { data } = useQuery(CURRENT_USER, {
		skip: !isLoggedIn,
		onCompleted: (data) => {
			setUser(data?.currentUser);
		},
	});
	const [logout] = useMutation(LOGOUT, {
		onCompleted: () => {
			setIsLoggedIn(false);
			setIsLoggingOut(false);
		},
	});

	if (isLoggingOut) {
		logout();
	}

	return (
		<AuthContext.Provider value={{ isLoggedIn, setIsLoggedIn, user, setUser, isLoggingOut, setIsLoggingOut }}>
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
