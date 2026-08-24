import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
const App = () => {
  const [addFriend,setAddFriend] = useState(false)
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList addFriend={addFriend} setAddFriend={setAddFriend}/>
        {addFriend && <AddFriendForm addFriend={addFriend} setAddFriend={setAddFriend}/>} 
      </div>
      <SplitBillForm/>
    </div>
  );
};

export default App;
