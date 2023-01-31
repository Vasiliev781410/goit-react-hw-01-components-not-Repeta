import './App.css';
import './friendList/friends.css';
import './profile/profile.css';

import Profile from './profile/Profile.jsx';
import user from './profile/user.json';

import Statistics  from './statistic/Statistics.jsx';
import data from './statistic/data.json';


import FriendList  from './friendList/FriendList.jsx';
import friends from './friendList/friends.json';

import TransactionHistory  from './transactionHistory/TransactionHistory.jsx';
import transactions from './transactionHistory/transactions.json';

function App() { 
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>
      <p/>  

      <Statistics title="Upload stats" stats={data}/>
      <p/>

      <FriendList friends={friends}/>
      <p/>

      <TransactionHistory items={transactions} />;
    </>
    );
}

export default App;
