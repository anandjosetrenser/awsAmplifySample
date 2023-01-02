import ApiRequest from './apiRequest'
import BaseAPI from './baseAPI'
import CurieLifeBaseResponse from './curieLifeBaseResponse'
import { generateCurieLifeError } from './curieLifeError'
import getUrl from './helper'

/**
 *  This API implements CurieLife specific API handling logic
 */
class CurieLifeAPI extends BaseAPI {
  /**
   * This function will perform CurieLife specific custom error checks.
   *
   * @param response - CurieLife response
   * @returns
   */

  // eslint-disable-next-line class-methods-use-this
  curieLifeStatusCheck = (response: CurieLifeBaseResponse): Promise<any> => {
    // TODO: Fix this dummy code
    if (response === undefined || response.StatusCode === undefined) {
      return Promise.resolve(response)
    }

    return Promise.reject(generateCurieLifeError(response.StatusCode))
  }

  /**
   * Generates a single API request
   *
   * @param endPoint API end point
   * @returns
   */
  request(endPoint: string): ApiRequest {
    return new ApiRequest(
      this.host.concat(endPoint),
      this.curieLifeStatusCheck
    ).setHeader(this.headers)
  }
}

const curieLifeAPI: CurieLifeAPI = new CurieLifeAPI(getUrl('tcab'))

export default curieLifeAPI
