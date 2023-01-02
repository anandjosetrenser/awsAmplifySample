import palette from './palette'

const color = {
  palette,

  background: palette.primary,
  backgroundLight: palette.secondary,
  backgroundDark: palette.primaryContrast,

  border: palette.secondary,
  borderLight: palette.supplementaryColor1,
  borderDark: palette.secondaryContrast,
  borderBlue: palette.tertiaryContrast,

  fontPrimary: palette.primaryContrast,
  fontSecondary: palette.secondary,
  fontHover: palette.accent,
  placeholder: palette.accentContrast,

  error: palette.dangerDark,
  intentions: {
    neutral: palette.secondary,
    primary: palette.infoLight,
    success: palette.success,
    warning: palette.warning,
    danger: palette.danger,
    info: palette.info,
  },
}

export default color
