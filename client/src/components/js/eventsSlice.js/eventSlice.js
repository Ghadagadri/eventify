import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import axios from 'axios'

export const getevent=createAsyncThunk("event/get",async()=>{
    try {
       let result= axios.get("http://localhost:5000/event")
       return result;
    } catch (error) {
        console.log(error)
    }
})

export const addevent=createAsyncThunk("event/add",async(event)=>{
    try {
        let result= await axios.post("http://localhost:5000/event/add",event)
        return result
    } catch (error) {
        console.log(error)
    }
    })

    export const deleteevent=createAsyncThunk('user/del',async (id) => {
        try {
          let result= axios.delete(`http://localhost:5000/event/${id}`);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })


      export const updtevent=createAsyncThunk('user/updt',async ({id,event}) => {
        try {
          let result= axios.put(`http://localhost:5000/event/${id}`,event);
        
          return result
          
        } catch (error) {
          console.log(error)
        }
      })



const initialState = {
  event: null,
  status:null
}

export const eventSlice = createSlice({
  name: 'event',
  initialState,
  reducers: {},
  extraReducers:{
    [getevent.pending]:(state)=>{state.status="pending"},
    [getevent.rejected]:(state)=>{state.status="failed"},
    [getevent.fulfilled]:(state,action)=>{state.status="successful";
    state.event=action.payload.data?.event},
    [addevent.pending]:(state)=>{state.status="pending"},
    [addevent.fulfilled]:(state)=>{state.status="fulfilled"},
    [addevent.rejected]:(state,action)=>{state.status="rejected"},
    [deleteevent.fulfilled]: (state) => {state.status="successe"},
    [deleteevent.rejected]: (state) => {state.status="failed"},
    [deleteevent.pending]: (state) => {state.status="pending"},
    [updtevent.fulfilled]: (state) => {state.status="successe"},
    [updtevent.rejected]: (state) => {state.status="failed"},
    [updtevent.pending]: (state) => {state.status="pending"},
  }
})
// Action creators are generated for each case reducer function

export default eventSlice.reducer