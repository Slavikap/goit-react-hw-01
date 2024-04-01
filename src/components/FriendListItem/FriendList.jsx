import React from 'react';
import FriendListItem from './FriendListItem.jsx'; 
import styles from './FriendListItem.module.css';

export default function FriendList({ friends }) {
  return (
    <div className={styles.FriendList}>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
