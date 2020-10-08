import React, { useContext } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { userContext } from '../../context/userContext';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const history = useHistory();
  const auth = useContext(useContext);

  return (
    <userContext.Consumer>
      {({ userName, setAuth, setUserName }) => (
        <div className={styles.navbarContainer}>
          <ul type="none" className={styles.navbarList}>
            <li>
              <h4 className={styles.navbarName}>{userName}</h4>
            </li>
            |
            <li>
              <a
                className={styles.navbarElem}
                onClick={() => {
                  setAuth(false);
                  setUserName('');
                }}
              >
                Log Out
              </a>
            </li>
            |
            <li>
              <NavLink className={styles.navbarElem} to="/chat">
                Chat
              </NavLink>
            </li>
          </ul>
        </div>
      )}
    </userContext.Consumer>
  );
};

export default Navbar;
