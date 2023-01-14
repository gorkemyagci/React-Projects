import { useEffect, useState } from "react";

function App() {
  const [number, setNumber] = useState(0);

  const increment = () => {
    setNumber(() => number + 1);
  }
  const decrement = () => {
    setNumber(() => number - 1);
  }
  const [value, setValue] = useState('');

  const [text,setText] = useState('');
  const [user,setUser] = useState([
    {name:"Görkem",job:"Yazılımcı"},
    {name:"Ali",job:"Öğretmen"},
    {name:"Hüseyin",job:"Pazarlama"}
  ])

  const filtered = user.filter((item) => {
    return Object.keys(item).some((key) => 
    item[key].toString().toLowerCase().includes(text.toLowerCase())
    )
  })

  console.log(filtered);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(data => console.log(data.json()))
  }, []);
  return (
    <div className="App">
      <span>{number}</span>
      <button onClick={increment}>Arttır</button>
      <button onClick={decrement}>Azalt</button>
      
      {/* <input
      type="text"
      value={value}
      onChange={(e) => setValue(e.target.value)}
      /> */}


      <div>

        <input 
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        placeholder="Filter item"
        />

        <ul>
          {filtered.map(item => {
            return(
              <li>{item.name}</li>
            )
          })}
        </ul>

      </div>

    </div>
  );
}

export default App;