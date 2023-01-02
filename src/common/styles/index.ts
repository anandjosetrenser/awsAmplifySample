import styled from 'styled-components'

import color from '../../theme/color'
import dimensions from '../../theme/dimensions'
import { spacingScale } from '../../theme/spacing'
import typography from '../../theme/typography'
import { ImageProps } from './interface'

export const AppContainer = styled.div`
  color: ${color.background} !important;
`

export const Image = styled.img<ImageProps>`
  width: ${(props) => (props.width ? `${props.width}px` : 'auto')};
  height: ${(props) => (props.height ? `${props.height}px` : 'auto')};
  margin-bottom: ${(props) =>
    props.nomargin ? `${spacingScale(0)}px` : `${spacingScale(1)}px`};
  user-select: none;
`
export const TitleText = styled.label`
  font-family: ${typography.fontFamily};
  color: ${color.fontPrimary};
  font-size: ${spacingScale(3)}px;
  font-weight: bold;
  margin-top: 10px;
`

export const Container = styled.div`
  margin: ${spacingScale(5)}px ${spacingScale(2.5)}px;
`

export const ContainerWhite = styled.div`
  margin-bottom: ${spacingScale(2)}px;
  padding: ${spacingScale(1)}px;
  color: ${color.fontPrimary};
  background-color: ${color.background};
  border-radius: ${dimensions.borderRadius};
  box-shadow: ${spacingScale(1)}px ${spacingScale(0.75)}px
    ${spacingScale(1.5)}px -${spacingScale(0.5)}px rgb(0 0 0 / 15%);
`
