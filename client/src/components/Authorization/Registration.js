import React, { useContext, useState } from 'react';
import { userContext } from '../../context/userContext';
import styles from './Auth.module.scss';

const Registration = () => {
  const auth = useContext(userContext);

  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
  });

  const registrationHandler = async (event) => {
    event.preventDefault();
    try {
      await fetch('/api/auth/register', {
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
            placeholder="Type your first name here"
            id="firstName"
            type="text"
            name="firstName"
            className="inputField"
            value={form.firstName}
            onChange={changeHandler}
          />
          <label htmlFor="firstName">First Name</label>
        </div>

        <div className={styles.inputContainer}>
          <input
            placeholder="Type your last name here"
            id="lastName"
            type="text"
            name="lastName"
            className="inputField"
            value={form.lastName}
            onChange={changeHandler}
          />
          <label htmlFor="lastName">Last Name</label>
        </div>

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
        <button className={styles.authButton} onClick={registrationHandler}>
          Sign Up
        </button>
      </div>
    </div>
  );
};

export default Registration;
