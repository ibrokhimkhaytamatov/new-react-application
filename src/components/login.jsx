import {useState} from 'react'
import { logo } from '../logo'
import Input from '../ui/input'
import {useDispatch,useSelector} from 'react-redux'
import { loginUserStart } from '../reduserSlice/auth'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isloading} = useSelector(state => state.auth)

    // console.log(isloading);

    const loginHandle = e => {
        e.preventDefault()
        dispatch(loginUserStart())
    }

  return (
    <div className='text-center mt-5'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Please sign in</h1>
                   <Input label={'Email'} state={email} type={email} setState={setEmail}/>
                   <Input label={'Password'} type={password} state={password} setState={setPassword}/>
                    <button className="btn btn-primary w-100 py-2" disabled={isloading} onClick={loginHandle} type="submit">{isloading ? 'Loading...' : 'Sign in'}</button>
                </form>
            </main>
        </div>
  )
}

export default Login
