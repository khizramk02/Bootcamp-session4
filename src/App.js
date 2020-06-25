import React , {useState} from 'react';
import './App.css';
import Practice from './practice';
import {Counter} from './counter';

// only one component can be exported default like in the case App component is exported
// so counter component will not be exported default.
// we can use classes as variables like
// className = red ${isHot 'red' : 'blue'}

function App() {

  let [count,setCount] = useState(10);
  let[isHot , setHot] = useState(true);

  return (
    <div className ={`hot ${isHot ? 'hot' : 'cold'}`}>

        <h3>Checking whether it is hot or cold outside...<br /> {isHot ? 'yes, Hot' : 'cold'}</h3>
        <h3>from app.js</h3>
        <Practice  type = 'react'/>
        
        <Practice  type = 'react and html'/>
        
        <Counter  counter = {count}/>

        <button onClick={
          ()=> setCount(++count)
        }>
          counter increment
          </button>

          <button onClick={
          ()=> setHot(!isHot)
        }>
          convert temperature
          </button>
    </div>
  );
}

export default App;
