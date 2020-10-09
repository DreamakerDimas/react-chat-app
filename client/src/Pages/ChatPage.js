import React, { useState, useEffect, useContext } from 'react';
import Message from '../components/Message';
import { userContext } from '../context/userContext';
import styles from './ChatPage.module.scss';

const ChatPage = () => {
  const auth = useContext(userContext);
  const [chat, setChat] = useState([]);
  const [newMessage, setNewMessage] = useState('');

  const inputChangeHandler = (event) => {
    setNewMessage(event.target.value);
  } 

  const inputSubmitHandler = async () => {
    try {
      const messageData = {message: newMessage, userId: auth.userId};
      await fetch('/api/chat', {
        method: 'POST', 
        body: JSON.stringify(messageData),
        headers: {
            'Content-Type': 'application/json',
          },
        });
        setNewMessage('');
      } catch (e) {
        console.log(new Error('handlerError'))
      }
  }

  const loadChat = async () => {
    try {
      console.log('load chat');
      await fetch('/api/chat/', {
        method: 'GET',
      })
        .then((res) => {
          return res.json();
        })
        .then((data) => {
          setChat(data);
        });
    } catch (e) { }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      loadChat();
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  return (
  <div className={styles.chatContainer}>
    <div className={styles.messagesContainer}>
    {
    chat.map((message) => (
      <Message key={message.id} message={message} />
    ))
    }
    </div>
    <div className={styles.inputContainer}>
      <input className={styles.inputElem} type='text' value={newMessage} placeholder="Type your message here" onChange={inputChangeHandler} />
      <button className={styles.sendMessage} onClick={inputSubmitHandler}>Send</button>
    </div>
    </div>)
};

export default ChatPage;
