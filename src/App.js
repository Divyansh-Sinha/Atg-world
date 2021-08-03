import React, { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import Home from './Home/Home';

function App() {

  const [signIn,setSignIn] = useState(false);

  return (
    <div className="App">
      <Navbar signIn={signIn} setSignIn= {setSignIn}/>
      <Home signIn={signIn} setSignIn= {setSignIn}/>
    </div>
  );
}

export default App;
