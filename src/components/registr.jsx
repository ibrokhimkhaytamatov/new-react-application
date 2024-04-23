import  { useState } from 'react'
import { logo } from '../logo'
import Input from '../ui/input'
import {useSelector,useDispatch} from 'react-redux'
import { registerUserStart, registerUserSuccess,registerUserFailure } from '../reduserSlice/auth'
import AuthService from '../service/auth'

const Registr = () => {
    const [email, setEmail] = useState('')
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()
    const {isloading} = useSelector(state => state.auth)
    // console.log(islogged);

    const registerHandle = async (e) => {
        e.preventDefault()
        dispatch(registerUserStart())
        const user = {username, email, password}
        try {
            dispatch(registerUserSuccess())
            const  response = await AuthService.userRegister(user)
            console.log(response);
            console.log(user);
        } catch (error) {
            dispatch(registerUserFailure())
        }
    }
    return (
        <div className='text-center mt-5'>
            <main className="form-signin w-25 m-auto">
                <form>
                    <img className="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 className="h3 mb-3 fw-normal">Register</h1>
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
