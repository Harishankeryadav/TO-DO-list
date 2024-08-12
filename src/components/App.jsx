import React, { useState } from "react";
import Todotext from "./Todotext";
import Input from "./Input";

function App() {
  const [getdata, setdata] = useState("");
  const [allData, setOnList] = useState([]);


  function collectInputData(val) {
    // console.log(event.target.value);
    // const newValue = val
    setdata(val);
  }

  function addOnList(val) {

    setOnList((prevData) => {
      return [...prevData, val]
    });
    // console.log(allData)
    setdata("");
  }

  function deleteData(id) {
    setOnList((prevData) => {
      return prevData.filter((item, index) => {
        return index !== id
      })
    });
  }

  return (
    <div className="container">
      <div className="heading">
        <h1>To-Do List</h1>
      </div>
      <div className="form">
        <Input f1 = {addOnList} f2 = {collectInputData} data = {getdata}
        />
      </div>

      <div>
        <ul>
          {allData.map((item, index) => (
            <Todotext key={index} id={index} text={item} onChecked={deleteData}
            />
          ))}
        </ul>
      </div>

    </div>
  );
}

export default App;
