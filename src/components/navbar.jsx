import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import { logo } from '../logo'
import { useDispatch, useSelector } from 'react-redux'
import { logoutUser } from '../reduserSlice/auth'
import { removeItem } from '../helpers/persistance-storage'

const Navbar = () => {

  const {islogged, user} = useSelector(state => state.auth)
  const navigate = useNavigate()
  const dispatch = useDispatch()
  // console.log(islogged);

  const logoutHandle = () => {
    dispatch(logoutUser())
    removeItem('token')
    navigate('/login')
  }



  return (
    <div className="container pt-3 d-flex flex-column flex-md-row align-items-center pb-3 mb-4 border-bottom">
     <Link to={'/'}>
        <img src={logo} width={80} height={60} alt="logo name" />
     </Link>
     <nav className="d-inline-flex mt-2 mt-md-0 ms-md-auto">
     {
      islogged ? (
        <>
        <p className='me-3 py-2 link-body-emphasis text-decoration-none'>{user.username}</p>
        <button className='btn btn-outline-danger' onClick={logoutHandle}>Log out</button>
        <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/registr'}>
            Registr
        </Link>
        </>
        
      ):(
        <>
         <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/login'}>
            Login
        </Link>
        <Link className='me-3 py-2 link-body-emphasis text-decoration-none' to={'/registr'}>
            Registr
        </Link>
        </>
      )
     }
       
      </nav>
    </div>
  )
}

export default Navbar
