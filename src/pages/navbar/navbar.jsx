import React from 'react'
import { Link } from 'react-router-dom'
const logo = './soff.png'

const Navbar = () => {
  return (
    <nav  className='d-flex bg-body justify-content-between align-items-center p-3 mt-2'>
      <img style={{width:200, borderRadius:5}} src={logo} alt="logo" />
      <div style={{width:900}} className="d-flex justify-content-around">
      <Link to={'/'} style={{fontSize:30, color:'black'}}>Home</Link>
      <Link to={'/mutaxasislar'} style={{fontSize:30,  color:'black'}}>Mutaxasislar</Link>
      <Link to={'/about'} style={{fontSize:30,  color:'black'}}>About us</Link>
      <Link to={'/singlepage'} style={{fontSize:30,  color:'black'}}>Single page</Link>
      </div>
     
    </nav>
  )
}

export default Navbar
