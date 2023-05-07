import { configureStore } from '@reduxjs/toolkit'
import eventSlice from './eventsSlice.js/eventSlice'
import userSlice from './userSlice/userSlice'

export const store = configureStore({
  reducer: {
    user:userSlice,
    event:eventSlice
  },
})