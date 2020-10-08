import React, { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useRoutes } from './routes';
import { userContext } from './context/userContext';

function App() {
  const [userId, setUserId] = useState(null);
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setAuth] = useState(false); // !!! need token
  const routes = useRoutes(isAuthenticated);

  return (
    <userContext.Provider
      value={{
        userId,
        userName,
        isAuthenticated,
        setUserId,
        setUserName,
        setAuth,
      }}
    >
      <Router>
        {isAuthenticated && <Navbar />}
        <div>{routes}</div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
