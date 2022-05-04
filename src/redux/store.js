import { configureStore } from '@reduxjs/toolkit'
import locationReducer from './reducer';

const store = configureStore ({
  reducer: {
    loc: locationReducer
  }
})

export default store;