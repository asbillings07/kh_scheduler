import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer } from './elements'
import { Heading, EmailMessaging, UserSignUp, Profile } from './layouts'
function App() {
  return (
    <Router>
      <MainContainer>
        <Heading title='KH Scheduler' />
        <Switch>
          <Route exact path='/' component={UserSignUp} />
          <Route path='/profile' component={Profile} />
          <Route path='/email' component={EmailMessaging} />
        </Switch>
      </MainContainer>
    </Router>
  )
}

export default App
