import "./App.css";
import axios from "axios";
import React, { useEffect, useState } from "react";

function App() {
  useEffect(() => {
    const fetch = async () => {
      const data = await axios.get("http://localhost:5000/");
      console.log(data);
    };
    fetch();
  }, []);
  const [value, setValue] = useState('')
  const handleSubmit = async () => {
    await axios.post('http://localhost:5000/form', {value})
  }
  let name = 'avi'
  return (
    <div className="App">
      <h1>react(frontend)</h1>
      <input
        type="text"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button onClick={handleSubmit}>submit</button>
      <button onClick={async()=> await axios.post('http://localhost:5000/avi', {name})}>click</button>
    </div>
  );
}

export default App;
