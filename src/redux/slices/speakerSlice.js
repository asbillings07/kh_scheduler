import { createSlice } from '@reduxjs/toolkit'
import { requestApi } from '../requestApi'

const initialState = {
  loading: false,
  speakers: [],
  speaker: [],
  errors: null,
  course: [],
  success: false
}

const speakerSlice = createSlice({
  name: 'speakerSlice',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = true
    },
    toggleSuccess: (state, action) => {
      state.success = action.payload
    },
    isError: (state, action) => {
      state.errors = action.payload
      state.loading = false
    },
    gotAllSpeakers: (state, action) => {
      state.speakers = action.payload.speakers
      state.loading = false
    },
    gotSpeaker: (state, action) => {
      state.speaker = action.payload.speaker
      state.loading = false
    },
    createdSpeaker: (state, action) => {
      console.log(action.payload)
      state.success = true
      state.loading = false
    },
    updatedSpeaker: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = true
    },
    deletedSpeaker: (state, action) => {
      console.log(action.payload)
      state.success = true
      state.loading = false
    }
  }
})

export default speakerSlice.reducer
export const {
  isError,
  gotAllSpeakers,
  toggleLoading,
  gotSpeaker,
  createdSpeaker,
  toggleSuccess,
  updatedSpeaker,
  deletedSpeaker
} = speakerSlice.actions

export const getAllSpeakers = () => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getSpeakers')
      dispatch(gotAllSpeakers(res.data))
    } catch (err) {
      dispatch(isError(err))
    }
  }
}
export const getSpeaker = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getSpeaker', 'GET', null, { id })
      dispatch(gotSpeaker(res))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
/**
 *
 * @param {talkCoordId, speaker} data
 */
export const createSpeaker = (data) => {
  const { congId, talkCoordId, speaker } = data
  return async (dispatch) => {
    try {
      const res = await requestApi('/createSpeaker', 'POST', { congId, talkCoordId, speaker })
      dispatch(createdSpeaker(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}

/**
 *
 * @param {speakerId, speaker} object
 */
export const updateSpeaker = ({ speakerId, speakerUpdates }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/updateSpeaker', 'PUT', { speakerId, speakerUpdates })
      dispatch(updatedSpeaker(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
export const deleteSpeaker = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/deleteSpeaker', 'POST', { id })
      dispatch(deletedSpeaker(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
