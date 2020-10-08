import React from 'react';
import { Switch, Route, Redirect } from 'react-router-dom';
import AuthPage from './Pages/AuthPage';
import ChatPage from './Pages/ChatPage';

export const useRoutes = () => {
  // !!!!!!
  if (false) {
    return (
      <Switch>
        <Route path="/chat" exact>
          <ChatPage />
        </Route>
      </Switch>
    );
  }

  return (
    <Switch>
      <Route path="/" exact>
        <AuthPage />
      </Route>
      <Redirect to="/" />
    </Switch>
  );
};
