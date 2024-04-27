import axios from "../service/api"

const AuthService = {
    async userRegister(user)  {
        const {response} = await axios.post('/users',  {user})
        return response
    },
    async userLogin(user)  {
        const {data} = await axios.post('/users/login', {user})
        return data
    },
    async getUser()  {
        const {response} = await axios.get('/user')
        return response
    },
    
}

export default AuthService