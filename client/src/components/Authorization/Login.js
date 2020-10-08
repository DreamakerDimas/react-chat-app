import React, { useContext, useState } from 'react';
import styles from './Auth.module.scss';
import { userContext } from '../../context/userContext';

const Login = () => {
  const auth = useContext(userContext);
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const loginHandler = async (event) => {
    event.preventDefault();
    try {
      await fetch('/api/auth/login', {
        method: 'POST',
        body: JSON.stringify(form),
        headers: {
          'Content-Type': 'application/json',
        },
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          const { id, firstName, lastName } = data.dataValues;
          auth.setUserId(id);
          auth.setUserName(`${firstName} ${lastName}`);
          auth.setAuth(true);
        });
    } catch (e) {}
  };

  const changeHandler = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };

  return (
    <div className={styles.formContainer}>
      <div className={styles.inputsHolder}>
        <div className={styles.inputContainer}>
          <input
            placeholder="Type your email here"
            id="email"
            type="text"
            name="email"
            className="inputField"
            value={form.email}
            onChange={changeHandler}
          />
          <label htmlFor="email">Email</label>
        </div>

        <div className={styles.inputContainer}>
          <input
            placeholder="Type your password here"
            id="password"
            type="password"
            name="password"
            className="inputField"
            value={form.password}
            onChange={changeHandler}
          />
          <label htmlFor="password">Password</label>
        </div>
      </div>
      <div className={styles.actionCard}>
        <button className={styles.authButton} onClick={loginHandler}>
          Sign In
        </button>
      </div>
    </div>
  );
};

export default Login;
