import { createSlice } from '@reduxjs/toolkit'
import { requestApi } from '../requestApi'

const initialState = {
  loading: false,
  success: false,
  errors: null,
  textMessageInfo: null
}

const textSlice = createSlice({
  name: 'textSlice',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = true
    },
    toggleSuccess: (state, action) => {
      state.success = action.payload
    },
    onError: (state, action) => {
      state.errors = action.payload.error
      state.loading = false
    },
    sentText: (state, action) => {
      state.loading = false
      state.textMessageInfo = action.payload.message
      state.success = action.payload.success
    }
  }
})

export default textSlice.reducer
export const { onError, toggleSuccess, toggleLoading, sentText } = textSlice.actions

export const sentOutText = ({ textMessage, name, phoneNumber }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/sendSms', 'POST', { textMessage, name, phoneNumber })
      dispatch(sentText(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}
