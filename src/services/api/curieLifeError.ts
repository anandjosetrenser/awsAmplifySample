import getDisplayMessage from '../../i18n/displayMessage'
import { mapErroCodeToErrorMessage } from './statusCodes'

/**
 * CurieLife specific error class.
 */
class CurieLifeError {
  erroCode: number

  message: string

  constructor(errorCode: number, msg: string = '') {
    this.erroCode = errorCode
    this.message = msg
  }
}

/**
 * Generates CurieLife error.
 *
 * @param code error code
 * @param errorMessage CurieLife specific error message.
 * @returns
 */
export function generateCurieLifeError(
  code: number,
  errorMessage?: string
): CurieLifeError {
  return new CurieLifeError(
    code,
    !errorMessage ? mapErroCodeToErrorMessage(code) : errorMessage
  )
}

/**
 * Generate generic error  in case HHTTP error.
 *
 * @param code error code
 * @returns
 */
export function networkError(code: number): CurieLifeError {
  return new CurieLifeError(
    code,
    `${getDisplayMessage('common.errorMsg.unknownError')}`
  )
}

export default CurieLifeError
