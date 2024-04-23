import {createSlice} from '@reduxjs/toolkit'

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
        loginUserStart: state => {
            state.isloading = true
        },
        loginUserSuccess: state => {},
        loginUserFailure: state => {},

        // register

        registerUserStart: state => {
            state.isloading = true
        },
        registerUserSuccess: state => {
            state.islogged = true
            state.isloading = false
        },
        registerUserFailure: state => {
            state.isloading  =false
            state.error = 'error'
        },
    }
})

export const {loginUserStart, registerUserFailure, registerUserStart,registerUserSuccess} = authSlice.actions
export default authSlice.reducer