import './../App.css'
export const Friend = ({ handleSelectFriend,data,selectedFriend }) => {
  const isSelected = selectedFriend?.id === data.id;
  return (
    <li className={isSelected ?'selected':''}>
      <img src={data.image} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        {data.balance < 0 ? <p className='red'>You owe {data.name} ${Math.abs(data.balance)}</p>
        : ( data.balance === 0 ? <p>{data.name} and you are even</p> : <p className='green'>{data.name} owes you ${data.balance}</p>)
        }
      </div>
      <button onClick={()=>handleSelectFriend(data)} className='button'>{isSelected? 'Close':'Select'}</button>
    </li>
  );
};

export default Friend;
