import { configureStore } from '@reduxjs/toolkit'
import CounterSlice from './slices/CreateSlice'

export const store = configureStore({
    reducer: {
        counter: CounterSlice,
    },
})



