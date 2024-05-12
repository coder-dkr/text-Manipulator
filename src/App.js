import Alert from './components/Alert.js'
import NavBar from './components/NavBar.js'
import TextArea from './components/TextArea.js'
import About from './components/About'
import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

function App() {
  const [alert, setalert] = useState(null)

  function showAlert(message, type) {
    setalert({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null)
    }, 1300);
  }
  let fix = document.getElementById("root")

  const [mode, setmode] = useState('light')
  const togglemode = () => {
    if (mode === 'light') {
      document.body.classList.add("DarkModeEnabled")
      fix.style.color = "white"
      setmode('dark')
      showAlert("Dark Mode Has Been Enabled", "success")
    }
    else if (mode === 'dark') {
      setmode('light')
      fix.style.color = "black"
      document.body.classList.remove("DarkModeEnabled")
      showAlert("Light Mode Has Been Enabled", "success")
      

    }
  }
 const [active,setactive] = useState('')
 let Aboutactive = true;
 const showActive = ()=>{
  if(Aboutactive)
  setactive({
    home: false,
    about:true
  })
  else{
    setactive({
      home: true,
      about:false
    })
  }
  showActive()
 }
  return (
    <>
      <Router>

        <NavBar title="Text Manipulator" About="About" mode={mode} togglemode={togglemode} active={active}/>
        <Alert alert={alert} />
    
        <Routes>
          <Route exact path="/" element={<TextArea showAlert={showAlert} heading="Try Text Manipulator-" mode={mode} />} />
          <Route exact path="/home" element={<TextArea showAlert={showAlert} heading="Try Text Manipulator-" mode={mode} />} />
           <Route exact path="/about" element={<About Aboutactive={Aboutactive} mode={mode} />}/>
        </Routes>



      </Router>


    </>

  );
}

export default App;
