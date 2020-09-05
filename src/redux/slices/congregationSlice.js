import { createSlice } from '@reduxjs/toolkit'
import { requestApi } from '../requestApi'

const initialState = {
  loading: false,
  congregations: [],
  congregation: null,
  speaker: [],
  talkCoords: [],
  errors: null,
  success: false
}

const congregationSlice = createSlice({
  name: 'congregationSlice',
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
    gotAllCongs: (state, action) => {
      const { congregations } = action.payload
      state.congregations = congregations
      state.loading = false
    },
    gotCong: (state, action) => {
      const { congregation } = action.payload
      state.congregation = congregation
      state.loading = false
    },
    createdCong: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = action.payload.success
    },
    massCreatedCongs: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = action.payload.success
    },
    updatedCong: (state, action) => {
      console.log(action.payload)
      state.loading = false
      state.success = action.payload.success
    },
    deletedCong: (state, action) => {
      console.log(action.payload)
      state.success = action.payload.success
      state.loading = false
    }
  }
})

export default congregationSlice.reducer
export const {
  onError,
  gotAllCongs,
  massCreatedCongs,
  toggleLoading,
  gotCong,
  createdCong,
  toggleSuccess,
  updatedCong,
  deletedCong
} = congregationSlice.actions

export const getAllCongs = () => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getcongs')
      dispatch(gotAllCongs(res.data))
    } catch (err) {
      dispatch(onError(err))
    }
  }
}
export const getCongregation = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/getcong', 'GET', null, { id })
      dispatch(gotCong(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}
/**
 *
 * @param {cong} data
 */
export const createCong = ({ cong }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/createCong', 'POST', { cong })
      dispatch(createdCong(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}

/**
 *
 * @param { congs = @Array} object
 */
export const massCreateCongregations = ({ congs }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/massCreateCongs', 'POST', { congs })
      dispatch(massCreatedCongs(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}

/**
 *
 * @param {congId, cong} object
 */
export const updateCongregation = ({ congId, cong }) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/updateCong', 'PUT', { congId, cong })
      dispatch(updatedCong(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}
export const deleteCongregation = (id) => {
  return async (dispatch) => {
    try {
      const res = await requestApi('/deleteCong', 'POST', { id })
      dispatch(deletedCong(res.data))
    } catch (err) {
      dispatch(onError(err.response.data))
    }
  }
}
