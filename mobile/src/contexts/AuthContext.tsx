import { createContext, ReactNode } from 'react'

interface UserProps {
	name: string;
	avatarUrl: string;
}

interface AuthProviderProps {
	children: ReactNode;
}

export interface AuthContextDataProps {
	user: UserProps;
	signIn: () => Promise<void>;
}

export const AuthContext = createContext({} as AuthContextDataProps)

export function AuthContextProvider({ children }: AuthProviderProps) {
	async function signIn() {
		console.log('Vamor logar!')
	}

	return (
		<AuthContext.Provider value={{
			signIn,
			user: {
				name: 'Gabs',
				avatarUrl: 'https://github.com/gabyrodrigues.png'
			}
		}}>
			{children}
		</AuthContext.Provider>
	)
}