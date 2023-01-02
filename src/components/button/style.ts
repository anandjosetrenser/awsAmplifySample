/* eslint-disable @typescript-eslint/no-unsafe-return */
import styled from 'styled-components'

import { StyleProps } from './interface'

const StyledButton = styled.button<StyleProps>`
  ${({ styleOverrides }) => ({ ...styleOverrides })}
`

export default StyledButton
