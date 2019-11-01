import React from 'react';
import { useLocalStorage } from './hooks/useLocalStorage';
import Players from './components/Players';
import { usePlayers } from './components/api';
import './App.css';

function App() {
  const [player, setPlayer] =setState([]);

  useEffect(() => {
    axios
        .get('http://localhost:5000/api/players')
        .then(res => {
          console.log(res.data)
          .catch(err => {
            console.log(err.response)
          })
        })
  
  }, [])

  return (
    <>
    <h1>Women's World Cup - 2019</h1>

    <select value={player} onChange={e => setPlayer(e.target.value)}> 
      <option value="name">Name</option>
      <option value="country">Country</option>
      <option value="searches">Amount of Searches</option>
    </select>

    <input
      type='number' 
      placeholder='Search Count' 
      value={search} 
      onChange={e => setSearch(e.target.value)} 
    />

    <div>
      {players.map((player, index) => (
        <Players player={player} key={index} />
    ))}
    </div>
    </>
  );
}

export default App;