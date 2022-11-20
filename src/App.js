import React from 'react';
import './App.css';
import {useState} from "react";
import List from "./List";

function App() {
 
 const [currentItem, setCurrentItem] = useState(null);
 const [itemList, updateItemList] = useState([])

 const onChangeHandler = e => {
  console.log("the CurrentValue", e.target.value);
  setCurrentItem(e.target.value);
 };

 const addItemToList = () => {
  updateItemList([...itemList, { item: currentItem, Key: Date.now()}]);
  setCurrentItem("");
 };
  return (
    <div className="app">
      <header className="app-header">
      <h1>ADD USER</h1>

        <div className="wrapper">
          <div className="input-wrapper">
              <input className='input1' value = { currentItem } onChange = {onChangeHandler} />
              <button onClick={ addItemToList}>+ Add</button>
           </div>
           <List itemList = {itemList}/>
         </div>
      </header>
    </div>
  );
}

export default App;
