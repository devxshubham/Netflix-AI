import {configureStore} from '@reduxjs/toolkit'

import userReducer from './userSlice'
import moviesReducer from './movieSlice'
import AIreducer from './AIsearchSlice'

const appStore = configureStore({
        reducer : {
            user : userReducer,
            movies : moviesReducer,
            AIshow : AIreducer,
        },
})


export default appStore