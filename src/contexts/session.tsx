import { useStorageState } from '@hooks/useStorageState';
import { ReactNode, createContext, useContext } from 'react';
type DefaulSession = {
    id: string;
    email: string;
    firstName: string;
    lastName: string;
    profileImage: string;
    isVerified: boolean;
};
export interface Session {
    signIn: (session: DefaulSession) => void;
    signOut: () => void;
    session?: DefaulSession | null;
    isLoading: boolean;
}

const AuthContext = createContext<Session>({
    signIn: () => Promise<void>,
    signOut: () => null,
    session: null,
    isLoading: false,
});

// This hook can be used to access the user info.
export function useSession() {
    const value = useContext(AuthContext);
    if (process.env.NODE_ENV !== 'production') {
        if (!value) {
            throw new Error('useSession must be wrapped in a <SessionProvider />');
        }
    }
    return value as Session;
}

export function SessionProvider({ children }: { children: ReactNode }) {
    const [state, setState] = useStorageState<DefaulSession | null>('session');
    const [isLoading, session] = state;
    const signIn = (sessionData: DefaulSession) => {
        setState(sessionData);
    };

    const signOut = () => {
        setState(null);
    };
    return (
        <AuthContext.Provider
            value={{
                signIn,
                signOut,
                session,
                isLoading,
            }}>
            {children}
        </AuthContext.Provider>
    );
}
