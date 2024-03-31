import React from 'react';
import styles from './FriendListItem.module.css';

export default function FriendListItem({ friend }) {
  return (
    <div className={styles.FriendsItem}>
      <img src={friend.avatar} alt="User avatar" width="48" />
      <p>{friend.name}</p>
      <span className={`${styles.Color} ${friend.isOnline ? styles.online : styles.offline}`}>
        {friend.isOnline ? 'Online' : 'Offline'}
      </span>
    </div>
  );
}
