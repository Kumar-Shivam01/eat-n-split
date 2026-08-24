import "./../App.css";
import { useState } from "react";
const AddFriendForm = ({ onAddFriend, addFriend, setAddFriend }) => {
  const [name, setName] = useState("");
  const [image, setImage] = useState("https://i.pravatar.cc/48?u=118836");
  function handleSubmit(e) {
    e.preventDefault();

    if (!name || !image) return;
    const id = crypto.randomUUID();
    const newFriend = {
      id,
      name,
      image: `${image}?=${id}`,
      balance: 0,
    };
    onAddFriend(newFriend);
    setName("");
    setImage("https://i.pravatar.cc/48?u=118836");
  }
  return ( 
      <div>
        <form onSubmit={handleSubmit} className="form-add-friend">
          <label>👥Friend name</label>
          <input
            value={name}
            type="text"
            onChange={(e) => setName(e.target.value)}
          />
          <label>🖼️Image URL</label>
          <input
            type="text"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <button className="button">Add</button>
        </form>

        <button onClick={() => setAddFriend(!addFriend)} className="button">
          close
        </button>
      </div>
  );
};

export default AddFriendForm;
