import db from './connection'
import { DataItemDb } from '../../models/data'

export async function getAllData(): Promise<DataItemDb[]> {
  return await db('data').select('id', 'name', 'parent_id as parentId')
}
