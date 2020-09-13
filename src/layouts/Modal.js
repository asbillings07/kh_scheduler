import React from 'react'
import { Card } from '../elements/'

export const Modal = ({ isOpen, toggleOpen }) => {
  return (
    <Card isOpen={isOpen} toggleOpen={toggleOpen}>
      <Card.Header>Hello There!</Card.Header>
      <Card.Body>
        Hey, take a look at the earthlings. Goodbye! Do you have any idea how long it takes those
        cups to decompose. Just my luck, no ice. Did he just throw my cat out of the window? We
        gotta burn the rain forest, dump toxic waste, pollute the air, and rip up the OZONE! 'Cause
        maybe if we screw up this planet enough, they won't want it anymore! I gave it a cold? I
        gave it a virus. A computer virus. Must go faster... go, go, go, go, go! You're a very
        talented young man, with your own clever thoughts and ideas. Do you need a manager? Do you
        have any idea how long it takes those cups to decompose.
      </Card.Body>
    </Card>
  )
}
