import {useState} from 'react'
import { logo } from '../logo'
import Input from '../ui/input'

const Login = () => {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
  return (
    <div className='text-center mt-5'>
            <main class="form-signin w-25 m-auto">
                <form>
                    <img class="mb-4" src={logo} alt="" width="72" height="57" />
                    <h1 class="h3 mb-3 fw-normal">Please sign in</h1>
                   <Input label={'Email'} state={email} type={email} setState={setEmail}/>
                   <Input label={'Password'} type={'password'} state={password} setState={setPassword}/>
                    <button class="btn btn-primary w-100 py-2" type="submit">Sign in</button>
                </form>
            </main>
        </div>
  )
}

export default Login
