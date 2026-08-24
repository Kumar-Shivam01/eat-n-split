import './../App.css'
const AddFriendForm = () => {
  return (
    <form className="form-add-friend">
        <label>👥Friend name</label>
        <input type="text" />
        <label>🖼️Image URL</label>
        <input type="text" />
        <button className="button">Add friend</button>
    </form>
  )
}

export default AddFriendForm