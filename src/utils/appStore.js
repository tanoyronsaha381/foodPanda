import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import useReducer from './userSlice'
import cartSlice from './cartSlice'

const appStrore = configureStore(
    {
        reducer:{
            user : useReducer,
            cart : cartSlice
        }
    }
)

export default appStrore;