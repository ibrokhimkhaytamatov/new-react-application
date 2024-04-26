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
        signUserStart: (state) => {
            state.isloading = true
        },
        signUserSuccess: (state,  action) => {
            state.islogged = true
            state.isloading = false
            state.user = action.payload
        },
        signUserFailure: (state, action) => {
            state.isloading  = false
            state.error = action.payload
        } 
    },
})

export const {signUserStart,signUserSuccess, signUserFailure} = authSlice.actions
export default authSlice.reducer