import { configureStore } from '@reduxjs/toolkit'
import bazerReducer from './bazerSlice'
export const store = configureStore({
  reducer: {
    bazar: bazerReducer
  },
})

