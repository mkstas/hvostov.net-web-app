'use client';

import { useEffect, useState } from 'react';

export const useCheckAuth = () => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  useEffect(() => {
    const query = async () => {
      try {
        const response = await fetch(`${process.env.API_URL}/auth/check`, {
          credentials: 'include',
        });
        if (response.status === 200) {
          setIsLoggedIn(true);
        }
      } finally {
        setIsLoading(false);
      }
    };
    query();
  }, []);

  return { isLoading, isLoggedIn };
};
