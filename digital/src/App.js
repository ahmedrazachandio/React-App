import React, { useState } from "react";
import './App.css';

function App() {


  let time = new Date().toLocaleTimeString();

  const [ctime, seCtime] = useState(time);

  const UpdateTime = () =>{
    time = new Date().toLocaleTimeString();
    seCtime(time);
  }
  setInterval(UpdateTime , 1000);




  return (
    <div className="App">
      <h1 className="time">{ctime}</h1>
    </div>
  );
}

export default App;
