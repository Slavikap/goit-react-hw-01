import React from 'react';
import Profile from './components/Profile/Profile';
import FriendListItem from './components/FriendListItem/FriendListItem';
import friendsData from './components/FriendListItem/friends.json';
import transactions from "./components/TransactionHistory/transaction.json";
import TransactionHistory from "./components/TransactionHistory/Transaction";

const userData = {
  username: 'Jacques Gluke',
  tag: 'jgluke',
  location: 'Ocho Rios, Jamaica',
  avatar: 'https://cdn-icons-png.flaticon.com/512/2922/2922506.png',
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308
  }
};

const App = () => {
  return (
    <>
      <Profile
        name={userData.username}
        tag={userData.tag}
        location={userData.location}
        image={userData.avatar}
        stats={userData.stats}
      />
      {friendsData.map(friend => (
        <FriendListItem key={friend.id} friend={friend} />
      ))}
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
