import './App.css';
import Alert from './Components/Alert';
import NavBar from './Components/NavBar';
import TextForm from './Components/TextForm';
import React, { useState } from 'react';

function App() {
  const [myStyle, setMyStyle] = useState({ backgroundColor: 'white' });
  const [alert,setAlert] = useState(null);
  const showAlert = (message,type) =>{
    setAlert({
      msg:message,
      type:type
    })
    setTimeout(()=>{setAlert(null)},1500)
  }

  const toggleMode = () => {
    if (myStyle.backgroundColor === 'white') {
      setMyStyle({ backgroundColor: 'black' });
      showAlert("Dark Mode has been Enabled","success")
    } else {
      setMyStyle({ backgroundColor: 'white' });
      showAlert("Dark Mode has been Disabled","success")
    }
  };
  

  return (
    <div className="App" style={myStyle}>
      <NavBar toggleMode={toggleMode} title="Word Count" />
      <Alert alert={alert}/>
      <TextForm showAlert={showAlert} heading="Enter Text To Analyze" />
    </div>
  );
}

export default App;
