import React from 'react'
import { Input, InputContainer, TextArea, ButtonContainer, Button } from '../elements'
import { useSetState } from '../hooks'
import { sendOutEmail } from '../redux/slices/emailSlice'
import { useDispatch } from 'react-redux'
export const EmailMessaging = ({ history }) => {
  const dispatch = useDispatch()
  const initialState = {
    email: '',
    name: '',
    title: '',
    message: ''
  }

  const [state, setState] = useSetState(initialState)
  const handleInput = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  const handleSubmit = () => {
    if (state.message && state.email) {
      dispatch(sendOutEmail({ ...state }))
    } else {
      console.error('you must enter an email and message')
    }
  }

  return (
    <div>
      <InputContainer>
        <Input
          domID='email'
          name='email'
          type='email'
          label='To Email:'
          value={state.email}
          onChange={handleInput}
        />
        <Input
          domID='name'
          name='name'
          type='text'
          label='Name of Recipient:'
          value={state.name}
          onChange={handleInput}
        />
        <Input
          domID='subject'
          name='title'
          type='text'
          label='Subject:'
          value={state.title}
          onChange={handleInput}
        />
        <TextArea
          domID='emailMessage'
          name='message'
          type='textarea'
          label='Email Message:'
          cols={30}
          rows={10}
          value={state.message}
          onChange={handleInput}
        />
      </InputContainer>
      <ButtonContainer>
        <Button name='Submit' onClick={handleSubmit} />
        <Button name='Cancel' buttonType='cancel' onClick={() => history.push('/')} />
      </ButtonContainer>
    </div>
  )
}
