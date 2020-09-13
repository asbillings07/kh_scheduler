import React, { useState } from 'react'
import { useAuth0 } from '@auth0/auth0-react'
import { Modal } from './Modal'

export const Profile = () => {
  const [open, setOpen] = useState(false)
  const { user, isAuthenticated, isLoading } = useAuth0()

  if (isLoading) {
    return <div>Loading ...</div>
  }
  console.log(isLoading)
  console.log(isAuthenticated)
  return (
    isAuthenticated && (
      <div>
        <img src={user.picture} alt={user.name} />
        <h2>{user.name}</h2>
        <p>{user.email}</p>
        <button onClick={() => setOpen(!open)}>Click Me!</button>
        <Modal isOpen={open} toggleOpen={setOpen} />
      </div>
    )
  )
}
