import {configureStore } from '@reduxjs/toolkit'
import { postsReducer } from './hooks/postsSlise'

export default configureStore({
    reducer:{
        posts: postsReducer,
    }
})