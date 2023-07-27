import {configureStore} from '@reduxjs/toolkit'
import featuredProductsReducer from './features/fetchDataSlice'

const store = configureStore({
    reducer: {
        featuredSlice:featuredProductsReducer,
    }    
})

export default store