import React from 'react';
import FriendListItem from './FriendListItem.jsx'; 

export default function FriendList({ friends }) {
  return (
    <div>
      {friends.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
    </div>
  );
}
