import { useState } from "react"

const SplitBillForm = ({selectedFriend}) => {
  const [bill,setBill] = useState('')
  const [paidByUser,setPaidByUser] = useState('')
  const friendBill = bill? bill-paidByUser: '';
  const [whoIsPaying,setWhoIsPaying] = useState('user')
  return (
    <form className="form-split-bill">
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
            <option value="friend">X</option>
        </select>
    </form>
  )
}

export default SplitBillForm