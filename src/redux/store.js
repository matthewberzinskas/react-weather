import { configureStore } from '@reduxjs/toolkit'

import weatherReducer from './weatherSlice'
import locationReducer from './locationSlice'

export const store = configureStore({
  reducer: {
    weather: weatherReducer,
    location: locationReducer,
  },
})