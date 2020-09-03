import React from 'react'
import { MainContainer } from './elements'
import { Heading, EmailMessaging } from './layouts'
function App() {
  return (
    <MainContainer>
      <Heading title='KH Scheduler' />
      <EmailMessaging />
    </MainContainer>
  )
}

export default App
