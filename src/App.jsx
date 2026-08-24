import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
      </div>
    </div>
  );
};

export default App;
