import axios from "../service/api"

const AuthService = {
    async userRegister(user)  {
        const response = axios.post('/users',  {user})
        return response
    },
    async userLogin(user)  {
        const {data} = axios.post('/users/login', {user})
        return data
    },
    async getUser()  {
        const response = axios.get('/user')
    },
}

export default AuthService