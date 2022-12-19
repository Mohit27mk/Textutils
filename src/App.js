import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import React ,{useState} from 'react';
import Alert from './components/Alert';
 import About from './components/About';
 import {
   BrowserRouter as Router,
  Route,
   Routes
 } from "react-router-dom";

function App() {
  const [mode, setMode] = useState('light')

  const [alert, setalert] = useState(null);

  const showAlert=(message,type)=>{
    setalert({
      msg:message,
      type:type 
    })
    setTimeout(()=>{
      setalert(null);
  },2000);
  }



 const  toogleMode=()=>{
    if(mode==='light'){
      setMode('dark')
      document.body.style.backgroundColor='#121212'
      showAlert("Dark Mode is On","success")
    }
    else{
    setMode('light')
    document.body.style.backgroundColor='white'
    showAlert("Light Mode is On","success")
  }
}
  return (
   <>
    <Router> 
<Navbar title="TextUtils" mode={mode}  toogleMode={toogleMode} />
<Alert alert={alert}  />
<div className='container my-3'>
  <Routes>
          <Route exact path="/about" element={ <About mode={mode} />}/> 
           
            <Route exact path="/" element={ <TextForm heading="Try Textutils-Word Counter ,Character Counter ,Remove Extra Spaces" showAlert={showAlert}  mode={mode}/> }/>
          </Routes> 
          
</div>
 </Router>  
   </>
  );
}

export default App;
