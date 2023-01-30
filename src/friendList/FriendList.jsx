import FriendListItem from "./FriendListItem.jsx";

const FriendList = ({friends,}) =>(
    <ul className="friend-list">     
     {friends.map(friend => (<FriendListItem key={friend.id} friend={friend}/>))}
    </ul>   
  );                     

export default FriendList;
  