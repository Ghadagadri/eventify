import { createAsyncThunk, createSlice } from '@reduxjs/toolkit' 
import axios from 'axios'

// function register
export const userRegister = createAsyncThunk("user/register", async (user) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/user/register", user)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)
// login
export const userLogin = createAsyncThunk("user/login", async (userLogin) => {
    try {
        let response = await axios.post(
            "http://localhost:5000/user/login", userLogin)
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

// curent

export const userCurrent = createAsyncThunk("user/current", async () => {
    try {
        let response = await axios.get(
            "http://localhost:5000/user/current",{headers: {Authorization: localStorage.getItem("token")}})
        return await response
    } catch (error) {
        console.log(error)
    }
}
)

const initialState = {
 user:null,
 status:null,
}

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    // logout
    logout: (state, action) => {
        state.user = null;
        localStorage.removeItem("token");
    }
  },

//   extraReducers
  extraReducers:{
    [userRegister.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userRegister.fulfilled]: (state, action) => {
        state.status = 'Success';
       
        //  state.user heya  user: null, 
        state.user = action.payload.data?.newUserToken
        localStorage.setItem("token", action?.payload?.data?.token)
    },
    [userRegister.rejected]: (state) => {
        state.status = 'failed'
    },



    // login
    [userLogin.pending]: (state) => {
        state.status = 'loading'  
    },

    [userLogin.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload.data?.user;
        localStorage.setItem("token", action.payload.data?.token)
        

    },
    [userLogin.rejected]: (state) => {
        state.status = 'failed'


    },

       // Current
       [userCurrent.pending]: (state) => {
        state.status = 'loading'
        
    },

    [userCurrent.fulfilled]: (state, action) => {
        state.status = 'Success'
       
        //  state.user heya  user: null, 
         
        state.user = action.payload?.data?.user;
        

    },
    [userCurrent.rejected]: (state) => {
        state.status = 'failed'


    },
  },
})

// Action creators are generated for each case reducer function
export const { logout } = userSlice.actions

export default userSlice.reducer