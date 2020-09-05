import React, { createContext, useCallback } from 'react'
import { useThunkReducer } from './hooks'
import { requestApi } from './redux/requestApi'

export const KhContext = createContext()

const ERROR = 'ERROR'
const GOTEMAILS = 'GOTEMAILS'
const GOTTEXTS = 'GOTTEXTS'
const LOADING = 'LOADING'

const initialState = {
  emailInfo: [],
  textInfo: [],
  error: false,
  errorMessage: null,
  loading: true
}

const reducer = (state = initialState, action) => {
  switch (action) {
    case action.type === GOTEMAILS:
      return {
        ...state,
        emailInfo: action.payload.emailInfo,
        loading: false
      }
    case action.type === GOTTEXTS:
      return {
        ...state,
        textInfo: action.payload.textInfo,
        loading: false
      }
    case action.type === LOADING:
      return {
        ...state,
        loading: true
      }
    case action.type === ERROR:
      return {
        ...state,
        error: true,
        errorMessage: action.payload.error
      }
    default:
      return
  }
}

export const SchedulerProvider = ({ children }) => {
  const [state, dispatch] = useThunkReducer(reducer, initialState)

  // @Object { email, name, message, title }
  const sendEmail = async (dispatch, emailInfo) => {
    dispatch({ type: LOADING })
    try {
      const res = requestApi('/confirmSpeaker', 'POST', emailInfo)
      dispatch({ type: GOTEMAILS, payload: { emailInfo: res.data } })
    } catch (err) {
      dispatch({ type: ERROR, payload: { error: err } })
    }
  }
  // @Object  { textMessage, name, phoneNumber }
  const sendText = async (dispatch, textInfo) => {
    dispatch({ type: LOADING })
    try {
      const res = requestApi('/sendSms', 'POST', textInfo)
      dispatch({ type: GOTEMAILS, payload: { textInfo: res.data } })
    } catch (err) {
      dispatch({ type: ERROR, payload: { error: err } })
    }
  }
  const login = async () => {
    try {
      const res = await requestApi('/login')
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }
  const getSpeakers = async () => {
    try {
      const res = await requestApi('/getSpeakers')
      console.log(res)
    } catch (err) {
      console.log(err)
    }
  }

  const value = {
    state,
    actions: {
      sendText,
      sendEmail,
      login,
      getSpeakers,
      dispatch
    }
  }

  return <KhContext.Provider value={value}>{children}</KhContext.Provider>
}
