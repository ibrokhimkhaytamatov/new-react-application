import {useEffect, useState} from 'react'
import { logo } from '../logo'
import Input from '../ui/input'
import {useDispatch,useSelector} from 'react-redux'
import { signUserStart, signUserSuccess, signUserFailure } from '../reduserSlice/auth'
import AuthService from '../service/auth'
import {Validation} from '../components/index'
import { useNavigate } from 'react-router-dom'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isloading, loggedIn} = useSelector(state => state.auth)
    const navigate = useNavigate()

    // console.log(isloading);

    const loginHandle = async e => {
        e.preventDefault()
        dispatch(signUserStart())
        const user = {email, password}
        try {
            const res = await AuthService.userLogin(user)
            // console.log(res);
            // if (res && res.user) {
            //     dispatch(signUserSuccess(res.user))
            // } else {
            //     // dispatch(signUserFailure({error: 'Invalid response format'}))
            //     dispatch(signUserSuccess(res.user))
            // }
           return dispatch(signUserSuccess(res.user))
            navigate('/')
        } catch (error) {
            dispatch(signUserFailure(error))
            // console.log(error);
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
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                    <Validation/>
                   <Input label={'Email'} state={email} type={"email"} setState={setEmail}/>
                   <Input label={'Password'} type={"password"} state={password} setState={setPassword}/>
                    <button className="btn btn-primary w-100 py-2" disabled={isloading} onClick={loginHandle} type="submit">{isloading ? 'Loading...' : 'Sign in'}</button>
                </form>
            </main>
        </div>
  )
}

export default Login
