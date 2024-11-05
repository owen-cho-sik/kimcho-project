import React, { useState, useEffect } from "react";
import logo from './logo.svg';
import './App.css';

function App() {
  const [msg, setMsg] = useState([]);
  useEffect(() => {
    fetch('api/test')
      .then((res) => { return res.json(); })
      .then((data) => { setMsg(data); })
  }, []);
  return (
    <div className="App">
      <header className="App-header">
        <ul>
          {msg.map((content, idx) => <li key={`${idx} - ${content}`}>{content}</li>)}
        </ul>
      </header>
    </div>
  );
}

export default App;