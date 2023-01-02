/* eslint-disable @typescript-eslint/no-unused-vars */
import React from 'react'

import { useStyles } from './config'
import { ButtonProps } from './interface'
import StyledButton from './style'

export default function Button(props: ButtonProps) {
  const {
    title,
    onClick,
    children,
    type = 'button',
    intent = 'primary',
    variant = 'solid',
    size = 'medium',
    isFullWidth = false,
    isLoading = false,
    disabled = false,
  } = props
  const styles = useStyles({ isFullWidth, isLoading, intent, size, variant })

  return (
    <StyledButton
      type={type}
      title={title}
      disabled={disabled}
      onClick={onClick}
      styleOverrides={styles}
    >
      {children}
    </StyledButton>
  )
}
