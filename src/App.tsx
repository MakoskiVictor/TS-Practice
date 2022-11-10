import { useEffect, useState } from 'react';
import './App.css';
import List from "./components/list/List";

interface Sub {
  nick: string
  subMonths: number
  avatar: string
  description?: string
}

interface AppStates {
  subs: Array<Sub>
  subsNumber: number 
}



const INITIAL_STATE = [{
  nick: "sid",
  subMonths: 3,
  avatar: "https://i.pravatar.cc/150?u=sid",
  description: "Sid hace de mod a veces"
},
{
  nick: "sergio",
  subMonths: 7,
  avatar: "https://i.pravatar.cc/150?u=aergio"
} ]

function App() {
  const [subs, setSubs] = useState<AppStates["subs"]>([]);
  const [newSubsNumber, setNewSubsNumber] = useState<AppStates["subsNumber"]>(0)

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  return (
    <div className="App">
      <h1>Mis subs</h1>
      <List subs={subs}/>
    </div>
  );
}

export default App;
