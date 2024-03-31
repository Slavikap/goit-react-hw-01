import React from 'react';
import Profile from './components/Profile/Profile.jsx';
import FriendList from './components/FriendListItem/FriendList.jsx'; 
import friendsData from './components/FriendListItem/friends.json';
import transactions from "./components/TransactionHistory/transaction.json";
import TransactionHistory from "./components/TransactionHistory/Transaction.jsx";

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
      <FriendList friends={friendsData} /> {}
      <TransactionHistory transactions={transactions} />
    </>
  );
};

export default App;
