import { CSSObject } from 'styled-components'

import color from '../../theme/color'
import dimensions from '../../theme/dimensions'
import typography, {
  controlPackLarge,
  controlPackMedium,
  controlPackSmall,
} from '../../theme/typography'

export const INTENT_MAP = {
  neutral: {
    solidBg: color.palette.secondary,
    solidBgHover: color.palette.supplementaryColor1,
    solidFg: color.palette.primaryContrast,
    solidFgHover: color.palette.primaryContrast,
    fg: color.palette.primaryContrast,
    fgHover: color.palette.secondary,
  },
  primary: {
    solidBg: color.palette.supplementaryColor2,
    solidBgHover: color.palette.supplementaryColor3,
    solidFg: color.palette.primary,
    solidFgHover: color.palette.primary,
    fg: color.palette.info,
    fgHover: color.palette.secondary,
  },
  success: {
    solidBg: color.palette.success,
    solidBgHover: color.palette.successLight,
    solidFg: color.palette.primary,
    solidFgHover: color.palette.primary,
    fg: color.palette.success,
    fgHover: color.palette.secondary,
  },
  warning: {
    solidBg: color.palette.warning,
    solidBgHover: color.palette.warningLight,
    solidFg: color.palette.primary,
    solidFgHover: color.palette.primary,
    fg: color.palette.warning,
    fgHover: color.palette.secondary,
  },
  danger: {
    solidBg: color.palette.danger,
    solidBgHover: color.palette.dangerLight,
    solidFg: color.palette.primary,
    solidFgHover: color.palette.primary,
    fg: color.palette.danger,
    fgHover: color.palette.secondary,
  },
}

export const SIZE_MAP = {
  large: {
    fontSize: controlPackLarge.fontsize,
    fontWeight: typography.fontWeight.medium,
    height: controlPackLarge.height,
    paddingLeft: controlPackLarge.paddingHorizontal,
    paddingRight: controlPackLarge.paddingHorizontal,
  },
  medium: {
    fontSize: controlPackMedium.fontsize,
    fontWeight: typography.fontWeight.medium,
    height: controlPackMedium.height,
    paddingLeft: controlPackMedium.paddingHorizontal,
    paddingRight: controlPackMedium.paddingHorizontal,
  },
  small: {
    fontSize: controlPackSmall.fontsize,
    fontWeight: typography.fontWeight.default,
    height: controlPackSmall.height,
    paddingLeft: controlPackSmall.paddingHorizontal,
    paddingRight: controlPackSmall.paddingHorizontal,
  },
}

export type Intent = keyof typeof color.intentions
export type ButtonVariant = 'solid' | 'outline' | 'ghost'
export type ButtonIntent = Extract<
  Intent,
  'neutral' | 'primary' | 'success' | 'warning' | 'danger'
>

export const VARIANT_MAP = {
  solid: Object.entries(INTENT_MAP).reduce((acc, [key, intent]) => {
    acc[key as ButtonIntent] = {
      backgroundColor: intent.solidBg,
      color: intent.solidFg,
      '&:hover, &:focus': {
        backgroundColor: intent.solidBgHover,
        color: intent.solidFgHover,
      },
    }
    return acc
  }, {} as Record<keyof typeof INTENT_MAP, CSSObject>),
  outline: Object.entries(INTENT_MAP).reduce((acc, [key, intent]) => {
    acc[key as ButtonIntent] = {
      backgroundColor: 'transparent',
      border: `1px solid ${intent.fg}`,
      color: intent.fg,
      '&:hover, &:focus': {
        backgroundColor: color.backgroundLight,
        color: intent.fgHover,
      },
    }
    return acc
  }, {} as Record<keyof typeof INTENT_MAP, CSSObject>),
  ghost: Object.entries(INTENT_MAP).reduce((acc, [key, intent]) => {
    acc[key as ButtonIntent] = {
      border: `1px solid ${intent.fg}`,
      backgroundColor: 'transparent',
      color: intent.fg,
      '&:hover, &:focus': {
        backgroundColor: intent.fg,
        color: intent.fgHover,
      },
    }
    return acc
  }, {} as Record<keyof typeof INTENT_MAP, CSSObject>),
}

export function useStyles({
  isLoading,
  isFullWidth,
  intent,
  variant,
  size,
}: {
  isFullWidth: boolean
  isLoading: boolean
  intent: ButtonIntent
  size: 'small' | 'medium' | 'large'
  variant: ButtonVariant
}) {
  return {
    alignItems: 'center',
    appearance: 'none',
    border: 0,
    borderRadius: dimensions.borderRadius,
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: isFullWidth ? 'flex' : 'inline-flex',
    justifyContent: 'center',
    outline: 0,
    position: 'relative',
    textDecoration: 'none',
    touchAction: 'manipulation', // Disables "double-tap to zoom" for mobile; removes delay on click events
    transition: 'all 150ms',
    userSelect: 'none',
    fontFamily: typography.fontFamily,
    width: isFullWidth ? '100%' : undefined,
    ...SIZE_MAP[size],
    ...VARIANT_MAP[variant][intent],

    ':focus': {
      boxShadow: `0 0 0 2px ${color.backgroundLight}, 0 0 0 3px ${color.palette.danger}`,
      outline: 0,
    },
    ':active': { boxShadow: 'none' },
    ':disabled': {
      opacity: isLoading ? undefined : 0.4,
      cursor: 'not-allowed',
      pointerEvents: 'none',
    },
  }
}
