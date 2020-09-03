import React from 'react'
import { Input, InputContainer, TextArea } from '../elements'
import { useSetState } from '../hooks'
export const EmailMessaging = () => {
  const initialState = {
    email: '',
    title: '',
    message: ''
  }

  const [state, setState] = useSetState(initialState)

  const handleInput = (e) => {
    setState({ [e.target.name]: e.target.value })
  }

  return (
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
  )
}
