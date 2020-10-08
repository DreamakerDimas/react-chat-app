import React, { useState, useEffect } from 'react';
import styles from './ChatPage.module.scss';

const ChatPage = () => {
  const [chat, setChat] = useState([]);

  const loadChat = async () => {
    try {
      await fetch('/api/chat/', {
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setChat(data);
        });
    } catch (e) {}
  };

  useEffect({}); //!!!!!!!!!!!!!!!!!!!!!!!!!!!!

  return <div className={styles.chatContainer}></div>;
};

export default ChatPage;
