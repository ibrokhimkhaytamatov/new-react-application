import {Routes, Route} from 'react-router-dom'
import './App.css';
import {Main,Login,Registr, Navbar} from './components'

function App() {
  return (
  <>
  <Navbar/>
   <Routes>
    <Route path='/' element={<Main/>}/>
    <Route path='/login' element={<Login/>}/>
    <Route path='/registr' element={<Registr/>}/>
   </Routes>
   </>
  );
}

export default App;
