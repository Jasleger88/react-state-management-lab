// src/App.jsx
import React from "react"
import ZombieFighters from "./components/zombieFighters";
import {initialZombies} from "./components/zombieFighters";





const App = () => {

  return (

    <div className="App">
      <h1>Zombie Fighters In Motion </h1>
      <section>
        {initialZombies.map((zombiesFighters, index)=> (
          <zombiesFighterss key= {index} zombieFighters= {zombiesFighter}/>
        ))}
      </section>
    </div>
  );
}




export default App
