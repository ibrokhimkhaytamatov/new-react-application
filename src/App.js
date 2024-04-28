
import './App.css';
import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Home from './pages/home/home';
import About from './pages/about/about';
import MainLayout from './pages/layout/mainlayout';
import Mutaxasislar from './pages/mutaxasislar/page';
import Singlepage from './pages/singlepage/singlepage';

function App() {

  return (
    <BrowserRouter>
    <Routes>
      <Route element={<MainLayout/>}>
      <Route path='/' element={<Home/>}/>
      <Route path='/mutaxasislar' element={<Mutaxasislar/>}/>
      <Route path='/about' element={<About/>}/>
      <Route path='/singlepage' element={<Singlepage/>}/>
      </Route>
    </Routes>
    </BrowserRouter>
  );
}

export default App;
