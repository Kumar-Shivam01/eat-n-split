 
import Friend from './Friend'

const FriendsList = ({friends,setAddFriend,addFriend,handleSelectFriend,selectedFriend}) => {
  return (
    <ul>
      {friends.map((friend)=>(
        <Friend handleSelectFriend={handleSelectFriend} data={friend} key={friend.id} selectedFriend={selectedFriend}/>
      ))}
      {!addFriend && <button onClick={()=>setAddFriend(!addFriend)} className='button'>Add friend</button>}
    </ul>
  )
}

export default FriendsList