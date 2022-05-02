
import {Routes, Route} from 'react-router-dom';
import './Global-Styles/Style.css'
import Login from './Component/Login/Login';
import HomePage from './Component/HomePage/HomePage'
import Message from './Component/Messages-pages/Message';




function App() {
  return (
    <div className="App">
      <Routes>
        <Route path='/' element ={<Login/>} />
        <Route path='/home' element= {<HomePage/>}/>
        <Route path='/inbox' element = {<Message/>} />
      </Routes>
      
    </div>
  );
}

export default App;
