import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  temp: 0,
  data: []
}

export const weatherSlice = createSlice({
  name: 'weather',
  initialState,
  reducers: {
    SET_WEATHER: (state, action) => {
      state.data = action.payload
      state.temp = Math.round(((action.payload.main.temp-273.15)*1.8)+32)
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_WEATHER } = weatherSlice.actions

export default weatherSlice.reducer