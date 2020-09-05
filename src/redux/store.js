import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit'
import logger from 'redux-logger'
import rootReduer from './rootReducer'

export const createStore = () => {
  const store = configureStore({
    reducer: rootReduer,
    middleware: getDefaultMiddleware().concat(logger)
  })
  return store
}
