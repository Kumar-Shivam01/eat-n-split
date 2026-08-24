 
import Friend from './Friend'

const FriendsList = ({friends,setAddFriend,addFriend}) => {
  return (
    <ul>
      {friends.map((friend)=>(
        <Friend data={friend} key={friend.id}/>
      ))}
      {!addFriend && <button onClick={()=>setAddFriend(!addFriend)} className='button'>Add friend</button>}
    </ul>
  )
}

export default FriendsList