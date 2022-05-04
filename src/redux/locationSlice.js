import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  loaded: false,
  coords: {
    lat: 0,
    lon: 0
  },
  data: []
}

export const locationSlice = createSlice({
  name: 'location',
  initialState,
  reducers: {
    SET_COORDS: (state, action) => {
      state.coords.lat = action.payload.latitude;
      state.coords.lon = action.payload.longitude
      state.loaded = true;
    },
    SET_LOCATION: (state, action) => {
      state.data = action.payload
    },
  },
})

// Action creators are generated for each case reducer function
export const { SET_COORDS, SET_LOCATION } = locationSlice.actions

export default locationSlice.reducer