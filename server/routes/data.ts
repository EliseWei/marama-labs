import express from 'express'
import { getAllData } from '../db/data'
import { DataItem, DataItemDb } from '../../models/data'

const router = express.Router()

// GET /api/v1/data
router.get('/', async (req, res) => {
  const flatItems = (await getAllData()) as DataItemDb[]
  const topLevelItems = flatItems.filter((item) => !item.parentId)
  const descendantItems = flatItems.filter((item) => item.parentId)

  function addChildren(parent: DataItem, descArray: DataItemDb[]) {
    const myChildren = descArray.filter((item) => item.parentId === parent.id)
    if (myChildren.length) {
      parent.children = myChildren.map((child) => {
        delete child.parentId
        return addChildren(child, descArray)
      })
    }
    return parent
  }
  const nestedItems = topLevelItems.map((item) => {
    delete item.parentId
    return addChildren(item, descendantItems)
  })
  res.json({ data: nestedItems })
})

export default router
