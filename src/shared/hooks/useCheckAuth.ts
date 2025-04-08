import { useEffect, useState } from 'react';

export const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const query = async () => {
      try {
        let response = await fetch('http://localhost:3000/api/users', { credentials: 'include' });
        if (response.status === 200) {
          setIsLoggedIn(true);
        } else {
          response = await fetch('http://localhost:3000/api/auth/refresh', {
            credentials: 'include',
          });
          if (response.status === 200) setIsLoggedIn(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    query();
  }, []);

  return { isLoading, isLoggedIn };
};
