import React from 'react';
import styles from './Message.module.scss';
import { userContext } from '../context/userContext';
import classNames from 'classnames';

const Message = ({message}) => {
    const { userId: messageUserId, message: messageData, User: {firstName, lastName}} = message;
    const myMessage = classNames(styles.messageContainer, styles.myMessage)

    return (
    <userContext.Consumer>
        {({ userId }) => {
        if (userId === messageUserId) {
            return (
            <div className={myMessage}>
                <div className={styles.messageSender}>{`${firstName} ${lastName}`}</div>
                <div className={styles.messageData}>{messageData}</div>
            </div>
            )
        }   
        
        return (
            <div className={styles.messageContainer}>
                <div className={styles.messageSender}>{`${firstName} ${lastName}`}</div>
                <div className={styles.messageData}>{messageData}</div>
            </div>
            )
        }}
    </userContext.Consumer>
    )
}

export default Message;