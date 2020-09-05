import PropTypes from 'prop-types'
import React, { useState } from 'react'
import { StyledButton } from './components/StyledButton'
import { useInterval } from '../../hooks'
import { LoadingLine } from '../../elements/'

export function Button({
  buttonType = 'standard',
  name = null,
  disabled = false,
  type = 'button',
  size = 'standard',
  awaitedResourceDidLoad = false,
  progress = null,
  onClick = () => false,
  onClickAfterLoaded = null,
  showLoadOnClick = false
}) {
  const [loading, setLoading] = useState(false)
  const [psudeoProgress, setPsudeoProgress] = useState(0)
  const [delay, setDelay] = useState(1000)

  useInterval(() => {
    if (!showLoadOnClick || !isNaN(parseInt(progress))) return
    if (awaitedResourceDidLoad) {
      setDelay(1000)
      setPsudeoProgress(0)
      return
    }
    setPsudeoProgress(psudeoProgress === 0 ? 200 : 0)
  }, delay)

  const lineProgess = !isNaN(parseInt(progress)) ? progress : Math.random()

  const handleClick = (e) => {
    if (loading && !awaitedResourceDidLoad) return

    if (showLoadOnClick && isNaN(parseInt(progress))) {
      setPsudeoProgress(200)
      setDelay(1000)
    }

    if (awaitedResourceDidLoad) {
      onClickAfterLoaded(e)
    } else {
      onClick(e)
    }
  }

  return (
    <StyledButton
      disabled={disabled}
      size={size}
      type={type}
      buttonType={buttonType}
      onClick={handleClick}
    >
      {name}
      {showLoadOnClick && <LoadingLine progress={lineProgess} />}
    </StyledButton>
  )
}

Button.propTypes = {
  awaitedResourceDidLoad: PropTypes.bool,
  buttonType: PropTypes.string,
  disabled: PropTypes.bool,
  name: PropTypes.string,
  onClick: PropTypes.func,
  onClickAfterLoaded: PropTypes.func,
  progress: PropTypes.number,
  showLoadOnClick: PropTypes.bool,
  type: PropTypes.string
}
