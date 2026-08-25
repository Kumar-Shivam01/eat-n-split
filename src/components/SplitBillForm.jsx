import { useState } from "react"

const SplitBillForm = ({selectedFriend,onSplitBill}) => {
  const [bill,setBill] = useState('')
  const [paidByUser,setPaidByUser] = useState('')
  const friendBill = bill? bill-paidByUser: '';
  const [whoIsPaying,setWhoIsPaying] = useState('user')

  function handleSubmit(e){
    e.preventDefault()
    if(!bill || !paidByUser) return;
    onSplitBill(whoIsPaying === 'user'? friendBill:-paidByUser)
  }
  return (
    <form onSubmit={handleSubmit} className="form-split-bill">
        <h2>Split a bill with {selectedFriend.name}</h2>

        <label>💰 Bill value</label>
        <input type="number" value={bill} onChange={(e)=>setBill(Number(e.target.value))}/>

        <label>🙎 Your expense</label>
        <input type="text" value={paidByUser} onChange={(e)=>setPaidByUser(Number(e.target.value)>bill?paidByUser:Number(e.target.value))}/>

        <label>🧑 {selectedFriend.name}'s expense</label>
        <input type="number" value={friendBill} disabled/>

        <label>🤑 Who is paying the bill?</label>
        <select value={whoIsPaying} onChange={(e)=>setWhoIsPaying(e.target.value)}>
            <option value="user">You</option>
            <option value="friend">{selectedFriend.name}</option>
        </select>
        <button className="button">Split up</button>
    </form>
  )
}

export default SplitBillForm