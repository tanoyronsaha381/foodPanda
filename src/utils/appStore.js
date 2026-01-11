import { configureStore } from '@reduxjs/toolkit'
import React from 'react'
import useReducer from './userSlice'

const appStrore = configureStore(
    {
        reducer:{
            user : useReducer
        }
    }
)

export default appStrore;