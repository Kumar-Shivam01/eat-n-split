import "./../App.css";
const AddFriendForm = ({ addFriend, setAddFriend }) => {
  return (
      addFriend && (
        <div>
        <form className="form-add-friend">
          <label>👥Friend name</label>
          <input type="text" />
          <label>🖼️Image URL</label>
          <input type="text" />
          <button className="button">Add</button>
        </form>

        <button onClick={() => setAddFriend(!addFriend)} className="button">
          close
        </button>
        </div>
        )
  );
};

export default AddFriendForm;
