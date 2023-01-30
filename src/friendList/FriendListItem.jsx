const FriendListItem = ({friend}) =>{
    console.log(friend.isOnline);    
    return ( 
        <li className="item"> 
        {friend.isOnline === true ? <span className="status"></span> : <span className="status2"></span>}            
            <img className="avatar" src={friend.avatar} alt="User avatar" width="48" />
            <p className="name">{friend.name}</p>
        </li>
    );
}   

//

export default FriendListItem;
 