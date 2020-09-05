import { combineReducers } from '@reduxjs/toolkit'

import speakerSlice from './slices/speakerSlice'
import congregationSlice from './slices/congregationSlice'
import emailSlice from './slices/emailSlice'
import textSlice from './slices/textSlice'
import talkCoordSlice from './slices/talkCoordSlice'

const rootReducers = combineReducers({
  speakerSlice,
  congregationSlice,
  emailSlice,
  textSlice,
  talkCoordSlice
})

export default rootReducers
