import { useState } from "react";
import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";

const initialFriends = [
  {
    id: 118836,
    name: "Clark",
    image: "https://i.pravatar.cc/48?u=118836",
    balance: -7,
  },
  {
    id: 933372,
    name: "Sarah",
    image: "https://i.pravatar.cc/48?u=933372",
    balance: 20,
  },
  {
    id: 499476,
    name: "Anthony",
    image: "https://i.pravatar.cc/48?u=499476",
    balance: 0,
  },
];
const App = () => {
  const [addFriend, setAddFriend] = useState(false);
  const [friends, setFriends] = useState(initialFriends);

  function handleAddFriend(newFriend) {
    setFriends((friends) => [...friends, newFriend]);
  }
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList
          friends={friends}
          addFriend={addFriend}
          setAddFriend={setAddFriend}
        />
        {addFriend && (
          <AddFriendForm
            addFriend={addFriend}
            setAddFriend={setAddFriend}
            onAddFriend={handleAddFriend}
          />
        )}
      </div>
      <SplitBillForm />
    </div>
  );
};

export default App;
