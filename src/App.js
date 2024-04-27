import {Routes, Route} from 'react-router-dom'
import './App.css';
import {Main,Login,Registr, Navbar} from './components'
import { useEffect } from 'react';
import AuthService from './service/auth';
import { useDispatch } from 'react-redux';
import { signUserSuccess } from './reduserSlice/auth';
import { getItem } from './helpers/persistance-storage';

function App() {
  const dispatch = useDispatch()
  const getUser = async () => {
    try {
      const responce = await AuthService.getUser()
      console.log(responce);
      dispatch(signUserSuccess(responce.user))
    } catch (error) {
      
    }
  }

  useEffect(() => {
    const token = getItem('token')
    if(token){
      getUser()
    }
  },[])

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
