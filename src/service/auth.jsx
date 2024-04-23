import axios from "../service/api"

const AuthService = {
    async userRegister(user)  {
        const response = axios.post('/users',  {user})
        return response
    },
    async userLogin()  {
        const response = axios.post('/users/login')
    },
    async getUser()  {
        const response = axios.get('/user')
    },
}

export default AuthService