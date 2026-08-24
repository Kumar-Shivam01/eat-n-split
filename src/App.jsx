import "./App.css";
import AddFriendForm from "./components/AddFriendForm";
import FriendsList from "./components/FriendsList";
import SplitBillForm from "./components/SplitBillForm";
const App = () => {
  return (
    <div className="app">
      <div className="sidebar">
        <FriendsList />
        <AddFriendForm />
      </div>
      <SplitBillForm/>
    </div>
  );
};

export default App;
