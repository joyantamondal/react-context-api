
import { createContext, useState } from 'react';
import './App.css';
import GrandFather from './components/GrandFather/GrandFather';

export const RingContext = createContext('ring');

function App() {
  const [house, setHouse] = useState(5);
  const ornaments = 'Diamond';
  return (
   <RingContext.Provider value={ornaments}>
      <div className="App">
      <button onClick={()=>setHouse(house+1)}>Buy a new house</button>
     <GrandFather house={house} ornaments={ornaments}></GrandFather>
    </div>
   </RingContext.Provider>
  );
}

export default App;
