import express from 'express'
import { backendData } from '../data'

const router = express.Router()

// GET /api/v1/data
router.get('/', async (req, res) => {
  res.json({ data: backendData })
})

export default router
