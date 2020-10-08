import React, { useState } from 'react';
import styles from './Auth.module.scss';

const Login = () => {
  const [form, setForm] = useState({
    email: '',
    password: '',
  });

  const loginHandler = async () => {
    try {
      const foundUser = await fetch('localhost:3000/user');
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
        <button className={styles.authButton}>Sign In</button>
      </div>
    </div>
  );
};

export default Login;
