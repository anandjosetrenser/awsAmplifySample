// eslint-disable-next-line import/no-cycle
import { Data } from '../../features/sampleSlice/interface'
import curieLifeAPI from '../api/curieLifeAPI'
import CurieLifeError from '../api/curieLifeError'

export default function getSampleResponse() {
  return new Promise<{ data: Data }>((resolve, reject) => {
    curieLifeAPI
      .request('getObjects')
      .get()
      .then((data: Data) => {
        resolve({ data })
      })
      .catch((error: CurieLifeError) => {
        reject(error)
      })
  })
}
