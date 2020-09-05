import { createSlice } from '@reduxjs/toolkit'
import { requestApi } from '../requestApi'

const initialState = {
  loading: false,
  success: false,
  errors: null
}

const emailSlice = createSlice({
  name: 'emailSlice',
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
    sentEmail: (state, action) => {
      state.loading = false
      state.success = action.payload.success
    }
  }
})

export default emailSlice.reducer
export const { onError, toggleSuccess, toggleLoading, sentEmail } = emailSlice.actions

export const sendOutEmail = ({ email, name, message, title }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/sendEmail', 'POST', { email, name, message, title })
      dispatch(sentEmail(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}
