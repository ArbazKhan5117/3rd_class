import React from 'react';
import Dinner from './dinner';
import './App.css';

function App() {
  return (
    <div>
      <h1 style={{color:"red",fontSize:"50px",fontStyle:"oblique"}}>Good Morning the whole world</h1>
      <Dinner dishName='Chicken Karahi' sweet='kheer'/>
      <Dinner dishName='Chicken Biryani' sweet='Halwa'/>
      <Dinner dishName='Chicken Tika' sweet='ice-cream'/>
      <h2>Arbaz Restaurant's</h2>
    </div>
  );
}

export default App;
