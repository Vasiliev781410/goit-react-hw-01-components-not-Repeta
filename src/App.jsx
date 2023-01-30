import './App.css';
import Profile from './profile/Profile.jsx';
import user from './profile/user.json';

import Statistics  from './statistic/Statistics.jsx';
import data from './statistic/data.json';

import FriendList  from './friendList/FriendList.jsx';
import friends from './friendList/friends.json';

function App() { 
  return (
    <>
      <Profile
        username={user.username}
        tag={user.tag}
        location={user.location}
        avatar={user.avatar}
        stats={user.stats}/>

      <Statistics title="Upload stats" stats={data}/>

      <FriendList friends={friends}/>
    </>
    );
}

export default App;
