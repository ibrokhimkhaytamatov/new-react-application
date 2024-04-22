import {Routes, Route} from 'react-router-dom'
import './App.css';
import {Main,Login,Registr} from './components'

function App() {
  return (
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/regidtr' element={<Registr/>}/>
   </Routes>
  );
}

export default App;
