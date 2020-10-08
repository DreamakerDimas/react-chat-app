import { createContext } from 'react';

const noop = () => {};

export const userContext = createContext({
  userName: null,
  isAuthenticated: null,
  setUserName: noop,
  setAuth: noop,
});
