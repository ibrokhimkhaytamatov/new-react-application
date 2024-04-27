import {createSlice} from '@reduxjs/toolkit'
import { setItem } from '../helpers/persistance-storage'

const initialState ={
    isloading: false,
    islogged: false,
    error: null,
    user: null
}


export const authSlice = createSlice ({
    name:'auth',
    initialState,
    reducers: {
        signUserStart: state => {
            state.isloading = true
        },
        signUserSuccess: (state,  action) => {
            state.isloading = false
            state.islogged = true
            state.user = action.payload
            setItem("token",action.payload.token )
            // if (action.payload && action.payload.token) {
            //     localStorage.setItem('token', action.payload.token)
            // }
        },
        signUserFailure: (state, action) => {
            state.isloading  = false
            state.error = action.payload
        } ,
        logoutUser : state => {
            state.user = null
            state.islogged = false
        }
    },
})

export const {signUserStart,signUserSuccess, signUserFailure, logoutUser} = authSlice.actions
export default authSlice.reducer