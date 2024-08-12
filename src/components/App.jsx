import React, { useState } from "react";

function App() {
  const [getdata, setdata] = useState("");
  const [allData, setOnList] = useState([]);


  function collectInputData(event) {
    // console.log(event.target.value);
    const newValue = event.target.value;
    setdata(newValue);
  }

  function addOnList() {

    setOnList((prevData) => {
      return [...prevData, getdata]
    });
    console.log(allData)
    setdata("");
  }


  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <input onChange={collectInputData} type="text" value={getdata} />
        <button onClick={addOnList}>
          <span>Add</span>
        </button>
      </div>
      <div>
        <ul>
          {allData.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default App;
