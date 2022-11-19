import './App.css';
import {useState} from "react";

function App() {
 
 const [currentItem, setCurrentItem] = useState(null);
 const [itemList, updateItemList] = useState([])

 const onChangeHandler = e => {
  console.log("the CurrentValue", e.target.value);
  setCurrentItem(e.target.value);
 };

 const addItemToList = () => {
  updateItemList([...itemList, currentItem]);
  setCurrentItem("");
 };
  return (
    <div className="app">
      <header className="app-header">
        <div className="wrapper">
          <div className="input-wrapper">
              <input value = { currentItem } onChange = {onChangeHandler} />
              <button onClick={ addItemToList}>+</button>
           </div>
         </div>
      </header>
    </div>
  );
}

export default App;
