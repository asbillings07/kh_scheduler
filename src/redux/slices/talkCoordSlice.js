import { createSlice } from '@reduxjs/toolkit'
import { requestApi } from '../requestApi'

const initialState = {
  loading: false,
  talkCoordinators: [],
  talkCoordinator: null,
  errors: null,
  success: false
}

const talkCoordSlice = createSlice({
  name: 'talkCoordSlice',
  initialState,
  reducers: {
    toggleLoading: (state) => {
      state.loading = true
    },
    toggleSuccess: (state, action) => {
      state.success = action.payload
    },
    isError: (state, action) => {
      state.errors = action.payload.error
      state.loading = false
    },
    gotAllTalkCoords: (state, action) => {
      state.talkCoordinators = action.payload.talkCoordinators
      state.loading = false
    },
    gotTalkCoord: (state, action) => {
      state.talkCoordinator = action.payload.talkCoordinator
      state.loading = false
    },
    createdTalkCoord: (state, action) => {
      console.log(action.payload)
      state.success = action.payload.success
      state.loading = false
    },
    updatedTalkCoord: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = action.payload.success
    },
    massCreatedTalkCoords: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = action.payload.success
    },
    deleteTalkCoord: (state, action) => {
      console.log(action.payload)
      state.success = action.payload.success
      state.loading = false
    }
  }
})

export default talkCoordSlice.reducer
export const {
  isError,
  gotAllTalkCoords,
  toggleLoading,
  gotTalkCoord,
  createdTalkCoord,
  massCreatedTalkCoords,
  toggleSuccess,
  updatedTalkCoord,
  deleteTalkCoord
} = talkCoordSlice.actions

export const getAllTalkCoordinators = () => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getTalkcoords')
      dispatch(gotAllTalkCoords(res.data))
    } catch (err) {
      dispatch(isError(err))
    }
  }
}
export const getTalkCoordinator = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getTalkcoord', 'GET', null, { id })
      dispatch(gotTalkCoord(res))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
/**
 *
 * @param {congId, talkCoord} data
 */
export const createTalkCoordinator = ({ congId, talkCoord }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/createTalkcoord', 'POST', { congId, talkCoord })
      dispatch(createdTalkCoord(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
/**
 *
 * @param {congId = @String, talkCoords = @Array} object
 */
export const massCreateTalkCoordinators = ({ congId, talkCoords }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/massCreateTalkCoords', 'POST', { congId, talkCoords })
      dispatch(massCreatedTalkCoords(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}

/**
 *
 * @param {id, talkCoordUpdates} object
 */
export const updateTalkCoordinator = ({ id, talkCoordUpdates }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/updateTalkcoord', 'PUT', { id, talkCoordUpdates })
      dispatch(updatedTalkCoord(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
export const deleteTalkCoordinator = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/deleteTalkcoord', 'POST', null, { id })
      dispatch(deleteTalkCoord(res.data))
    } catch (err) {
      dispatch(isError(err.response.data))
    }
  }
}
