import './../App.css'
export const Friend = ({ data }) => {
  return (
    <li>
      <img src={data.image} alt={data.name} />
      <div>
        <h3>{data.name}</h3>
        {data.balance <= 0 ? <p className='red'>You owe {data.name} ${Math.abs(data.balance)}</p>
        : <p className='green'>{data.name} owes you ${data.balance}</p>
        }
      </div>
      <button className='button'>Select</button>
    </li>
  );
};

export default Friend;
