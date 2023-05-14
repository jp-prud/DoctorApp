import {
  createContext,
  useContext,
  useState,
  useCallback,
  useEffect,
} from 'react';

import AuthService from '@services/AuthService';
import {Alert} from 'react-native';
// import delay from '@utils/delay'

interface AuthContextProps {
  isAuthenticated: boolean;
  authLoading: boolean;
  loginConsumer(): void;
  logoutConsumer(): void;
}

const AuthContext = createContext<AuthContextProps>({} as AuthContextProps);

function AuthContextProvider({children}: {children: React.ReactNode}) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
  const [authLoading, setAuthLoading] = useState<boolean>(true);

  const loginConsumer = useCallback(async () => {
    try {
      setAuthLoading(true);

      // await // delay()

      await AuthService.connect();

      setIsAuthenticated(true);
    } catch (error) {
      Alert.alert('Erro ao logar!', 'Tente novamente mais tarde.');

      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  }, [setIsAuthenticated, setAuthLoading, AuthService]);

  const logoutConsumer = useCallback(async () => {
    try {
      setAuthLoading(true);

      // await // delay()

      await AuthService.logout();

      setIsAuthenticated(false);
    } catch (error) {
      Alert.alert('Erro ao logar!', 'Tente novamente mais tarde.');

      console.log(error);
    } finally {
      setAuthLoading(false);
    }
  }, [setIsAuthenticated, setAuthLoading, AuthService]);

  useEffect(() => {
    (async () => {
      // await // delay()

      try {
        const authenticated = await AuthService.validate();

        if (authenticated) setIsAuthenticated(true);
      } catch (error) {
        Alert.alert(
          'Erro ao conectar-se',
          'Erro ao obter as informações, tente novamente.',
        );

        console.log(error);
      } finally {
        setAuthLoading(false);
      }
    })();
  }, [setIsAuthenticated, AuthService]);

  return (
    <AuthContext.Provider
      value={{
        isAuthenticated: isAuthenticated,
        authLoading,
        loginConsumer,
        logoutConsumer,
      }}>
      {children}
    </AuthContext.Provider>
  );
}

function useAuthContext() {
  const context: AuthContextProps = useContext(AuthContext);

  return context;
}

export {AuthContextProvider, useAuthContext};
