import { ButtonIntent, ButtonVariant } from './config'

export type ButtonSize = 'small' | 'medium' | 'large'

export interface StyleProps {
  styleOverrides?: any
}

export interface ButtonProps {
  onClick: () => void
  title?: string
  intent?: ButtonIntent
  variant?: ButtonVariant
  size?: ButtonSize
  type?: 'button' | 'submit' | 'reset'
  isFullWidth?: boolean
  isLoading?: boolean
  children?: React.ReactNode
  disabled?: boolean
}
