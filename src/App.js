import './App.css';
import {useState} from "react";

function App() {
 
 const [currentItem, setCurrentItem] = useState(null);


 const onChangeHandler = e => {
  console.log("the CurrentValue", e.target.value);
  setCurrentItem(e.target.value);
 }
  return (
    <div className="app">
      <header className="app-header">
        <div className="wrapper">
          <div className="input-wrapper">
              <input value = { currentItem } onChange = {onChangeHandler} />
              <button>+</button>
           </div>
         </div>
      </header>
    </div>
  );
}

export default App;
