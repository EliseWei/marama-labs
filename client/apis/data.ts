import request from 'superagent'
import { DataItem } from '../../models/data'

const rootUrl = '/api/v1'

export function getData(): Promise<DataItem[]> {
  return request.get(rootUrl + '/data').then((res) => {
    return res.body.data
  })
}
