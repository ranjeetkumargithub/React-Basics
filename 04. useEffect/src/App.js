import { useEffect, useState } from 'react';
import './App.css';

function App() {

  const [text, setText] = useState('');
  const [name, setName] = useState('Love');

  // variation1 -> Every Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // });

  // variation2 -> First Render
  // useEffect(() => {
  //   console.log("UI RENDERING DONE");
  // },[]);

  // variation3 -> on first render + whenever dependency changes
  // useEffect(() => {
  //   console.log("Change observed");
  // }, [name]);

  // variation4 -> to handle unmounting of a component
  useEffect(() => {
    console.log("listener added");

    return () => {
      console.log("Listener removed");
    }
  },[text]);

  function changeHandler(event){
    console.log(text);
    setText(event.target.value);
  }

  return (
    <div className="App">
      <input type='text' onChange={changeHandler}></input>
    </div>
  );
}

export default App;
