import React, { useContext, useState } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import { useRoutes } from './routes';
import { userContext } from './context/userContext';

function App() {
  const routes = useRoutes();
  const [userName, setUserName] = useState('');
  const [isAuthenticated, setAuth] = useState(false); // !!!

  return (
    <userContext.Provider
      value={{ userName, isAuthenticated, setUserName, setAuth }}
    >
      <Router>
        <Navbar />
        <div>{routes}</div>
      </Router>
    </userContext.Provider>
  );
}

export default App;
