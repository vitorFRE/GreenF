import { createContext, useContext, useState, useEffect } from 'react';
import { api } from '../services/api';

export const AuthContext = createContext({});

type Props = {
  children: JSX.Element;
};

interface Data {
  user?: any;
  token?: string;
}

interface FormData {
  email: string;
  password: string;
}

export function AuthProvider({ children }: Props) {
  const user = localStorage.getItem('@greenf:user');
  const token = localStorage.getItem('@greenf:token');

  const [data, setData] = useState<Data>({});
  const [isLogged, setIsLogged] = useState(user ? true : false);

  async function signIn({ email, password }: FormData) {
    try {
      const response = await api.post('/sessions', { email, password });
      const { user, token } = response.data;

      localStorage.setItem('@greenf:user', JSON.stringify(user));
      localStorage.setItem('@greenf:token', token);

      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({ user, token });
      setIsLogged(true);

      console.log({ user, token });
    } catch (error: any) {
      if (error.response) {
        alert(error.response.data.message);
      } else {
        alert('F');
      }
    }
  }

  function signOut() {
    localStorage.removeItem('@greenf:user');
    localStorage.removeItem('@greenf:token');
    setIsLogged(false);
  }

  useEffect(() => {
    if (token && user) {
      api.defaults.headers.common['Authorization'] = `Bearer ${token}`;
      setData({
        token,
        user: JSON.parse(user),
      });

      window.addEventListener('storage', function (event) {
        if (event.key === '@greenf:token' && event.newValue !== token) {
          signOut();
        }
      });
    }
  }, []);

  return (
    <AuthContext.Provider
      value={{ signIn, signOut, user: data.user, isLogged }}
    >
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const context = useContext(AuthContext) as {
    signIn: ({ email, password }: FormData) => Promise<void>;
    user: any;
    isLogged: boolean;
    signOut: any;
  };

  return context;
}
