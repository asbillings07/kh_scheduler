import React, { useState } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { MainContainer } from './elements'
import { EmailMessaging, UserSignUp, Profile, NavBar, ErrorPage } from './layouts'
import { ReactTable } from './elements/'
function App() {
  const [isOpen, setIsOpen] = useState(false)
  const handleIsOpen = () => {
    setIsOpen((prevState) => setIsOpen(!prevState))
  }
  return (
    <Router>
      <MainContainer>
        <NavBar title='KH Scheduler' navbarState={isOpen} handleNavbar={handleIsOpen} />
        <Switch>
          <Route exact path='/' component={ReactTable} />
          <Route path='/profile' component={Profile} />
          <Route path='/email' component={EmailMessaging} />
          <Route component={ErrorPage} />
        </Switch>
      </MainContainer>
    </Router>
  )
}

export default App
