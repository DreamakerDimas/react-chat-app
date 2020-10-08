import React, { useState } from 'react';
import Login from '../components/Authorization/Login';
import Registration from '../components/Authorization/Registration';
import styles from './AuthPage.module.scss';

const AuthPage = () => {
  const [isLoginPage, setLoginPage] = useState(true);

  const pageChangeHandler = (event) => {
    event.preventDefault();
    setLoginPage(!isLoginPage);
  };

  return (
    <div className={styles.container}>
      {isLoginPage ? (
        <div className={styles.formContainer}>
          <button className={styles.pageBut} onClick={pageChangeHandler}>
            Registration Page
          </button>
          <h3>Login Form</h3>
          <Login />
        </div>
      ) : (
        <div className={styles.formContainer}>
          <button className={styles.pageBut} onClick={pageChangeHandler}>
            Sign In Page
          </button>
          <h3>Registration Form</h3>
          <Registration />
        </div>
      )}
    </div>
  );
};

export default AuthPage;
