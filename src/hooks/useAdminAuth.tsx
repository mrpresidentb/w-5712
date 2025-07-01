
import { useState, useEffect } from 'react';

const ADMIN_PASSWORD = '!Ttt741258';
const SESSION_KEY = 'admin_session';
const SESSION_DURATION = 2 * 60 * 60 * 1000; // 2 hours

export const useAdminAuth = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    checkExistingSession();
  }, []);

  const checkExistingSession = () => {
    try {
      const session = localStorage.getItem(SESSION_KEY);
      if (session) {
        const { timestamp } = JSON.parse(session);
        if (Date.now() - timestamp < SESSION_DURATION) {
          setIsAuthenticated(true);
        } else {
          localStorage.removeItem(SESSION_KEY);
        }
      }
    } catch (error) {
      console.error('Error checking session:', error);
      localStorage.removeItem(SESSION_KEY);
    }
    setIsLoading(false);
  };

  const login = (password: string): boolean => {
    if (password === ADMIN_PASSWORD) {
      try {
        localStorage.setItem(SESSION_KEY, JSON.stringify({ timestamp: Date.now() }));
        setIsAuthenticated(true);
        return true;
      } catch (error) {
        console.error('Error saving session:', error);
        return false;
      }
    }
    return false;
  };

  const logout = () => {
    try {
      localStorage.removeItem(SESSION_KEY);
      setIsAuthenticated(false);
    } catch (error) {
      console.error('Error during logout:', error);
    }
  };

  return { isAuthenticated, isLoading, login, logout };
};
