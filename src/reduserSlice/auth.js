import {createSlice} from '@reduxjs/toolkit'

const initialState ={
    isloading: false,
    islogged: false,
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
        registerUserSuccess: state => {},
        registerUserFailure: state => {},
    }
})

export const {loginUserStart, loginUserSuccess, loginUserFailure, registerUserStart} = authSlice.actions
export default authSlice.reducer