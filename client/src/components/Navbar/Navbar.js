import React from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import styles from './Navbar.module.scss';

const Navbar = () => {
  const history = useHistory();
  return (
    <div className={styles.navbarContainer}>
      <ul type="none" className={styles.navbarList}>
        <li>
          <a className={styles.navbarElem} href="/">
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
  );
};

export default Navbar;
