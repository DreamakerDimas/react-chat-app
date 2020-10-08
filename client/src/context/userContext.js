import { createContext } from 'react';

const noop = () => {};

export const userContext = createContext({
  userId: null,
  userName: null,
  isAuthenticated: null,
  setUserId: noop,
  setUserName: noop,
  setAuth: noop,
});
