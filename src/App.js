import './App.css';
import React from 'react';
import ChatBotImplement from './ChatBotImplement';

function App() {
  return (
    <div className="App">
        <h1>Licensing And Registration</h1>
        <h2>Enter your Email : </h2>
        <input type="email" size="40" width="30px"></input>
        <br></br>
        <h2>Enter your Password : </h2>
        <input type="password"></input>
        <ChatBotImplement/>
    </div>
  );
}

export default App;
