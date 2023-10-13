import express from 'express'
import mongoose from 'mongoose'

import { router } from './router'


mongoose.connect('mongodb://localhost:27017')
  .then(() => {
    const app = express()
    const port = 3001

    app.use(express.json())
    app.use(router)

    app.listen(port, () => {
      console.log(`🚀 Server is running on http://localhost:${port}`)
    })
    console.log('📦 Successfully connected to MongoDB')
  })
  .catch(() => console.log('❌ Failed to connect to MongoDB'))


