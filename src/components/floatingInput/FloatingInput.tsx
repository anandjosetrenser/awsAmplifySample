import { useEffect, useState } from 'react'

import { faXmarkCircle } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import { OnKeyDown, OnKeyPress } from '../../helpers/inputKeyEvents'
import color from '../../theme/color'
import { InputProps } from './interface'
import { ClearInput, Input, LabelWrapper, Wrapper } from './style'

function FloatingInput({
  label,
  name,
  value,
  type = 'text',
  onChange,
  dataTestId = '',
  autoComplete = 'on',
  min = '0',
  clearOption = true,
  disabled = false,
}: InputProps): JSX.Element {
  const [hasValue, setHasValue] = useState(false)

  useEffect(() => {
    if (value === '' || value === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }, [value])

  function onChangeValue(val: string) {
    onChange(val)
    if (val === '' || val === undefined) {
      return setHasValue(false)
    }
    return setHasValue(true)
  }

  return (
    <Wrapper>
      <Input
        disabled={disabled}
        type={type}
        name={name}
        autoComplete={autoComplete}
        value={value}
        data-testid={dataTestId}
        onChange={(event) => onChangeValue(event.target.value)}
        onKeyPress={(e) => {
          OnKeyPress(e, type)
        }}
        onKeyDown={(e) => {
          OnKeyDown(e, type)
        }}
        min={min}
      />
      <LabelWrapper hasValue={hasValue}>{label}*</LabelWrapper>
      {value !== '' && clearOption && (
        <ClearInput
          type="button"
          onClick={() => {
            onChangeValue('')
          }}
        >
          <FontAwesomeIcon
            style={{ color: color.placeholder }}
            icon={faXmarkCircle}
          />
        </ClearInput>
      )}
    </Wrapper>
  )
}

export default FloatingInput
