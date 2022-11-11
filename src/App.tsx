import { useEffect, useState } from 'react';
import './App.css';
import List from "./components/list/List";
import Form from "./components/form/Form";
import { Sub } from "./types"

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
  /* const [newSubsNumber, setNewSubsNumber] = useState<AppStates["subsNumber"]>(0) */

  useEffect(() => {
    setSubs(INITIAL_STATE)
  }, [])

  const handleNewSub = (newSub: Sub): void => {
    setSubs(subs => [...subs, newSub])
  }

  return (
    <div className="App">
      <h1>Mis subs</h1>
      <List subs={subs}/>
      <Form onNewSub={handleNewSub} />
    </div>
  );
}

export default App;
