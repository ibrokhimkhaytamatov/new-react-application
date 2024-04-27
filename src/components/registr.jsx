import  { useState, useEffect } from 'react'
import { logo } from '../logo'
import Input from '../ui/input'
import {useSelector,useDispatch} from 'react-redux'
import { signUserStart, signUserSuccess, signUserFailure } from '../reduserSlice/auth'
import AuthService from '../service/auth'
import {Validation} from '../components/index'
import { useNavigate } from 'react-router-dom'

const Registr = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isloading,loggedIn} = useSelector(state => state.auth)
    const navigate = useNavigate()
    // console.log(islogged);

    const registerHandle = async (e) => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = {username, email, password}
        try {
            dispatch(signUserSuccess())
            const  response = await AuthService.userRegister(user)
            dispatch(signUserSuccess(response.data.errors))
        } catch (error) {
            dispatch(signUserFailure(error))
        }
    }

    useEffect(() => {
        if(loggedIn){
        navigate('/')
        }
    }, [loggedIn])


    return (
        <div className='text-center mt-5'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>
                    <Validation/>
                   <Input label={'Email'} state={email} type={'email'} setState={setEmail}/>
                   <Input label={'username'} state={username} setState={setUsername}/>
                   <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>
                    <button className="btn btn-primary w-100 py-2" disabled={isloading} onClick={registerHandle} type="submit">{isloading ? 'Loading...' : 'Register'}</button>
                </form>
            </main>
        </div>
    )
}

export default Registr
