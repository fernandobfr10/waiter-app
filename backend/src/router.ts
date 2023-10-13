import { Router } from 'express'

import { listCategories } from './app/useCases/categories/listCategories'
import { createCategory } from './app/useCases/categories/createCategory'

export const router = Router()

// List Categories
router.get('/categories', listCategories)

// Create Category
router.post('/categories', createCategory)

// List Products
router.get('/products', (request, response) => {
  response.send('Ok')
})

// Create Product
router.post('/products', (request, response) => {
  response.send('Ok')
})

// Get Products by Category
router.get('/categories/:categoryId/products', (request, response) => {
  response.send('Ok')
})

// List Orders
router.get('/orders', (request, response) => {
  response.send('Ok')
})

// Create Order
router.post('/orders', (request, response) => {
  response.send('Ok')
})

// Change Order Status
router.patch('/orders/:orderId', (request, response) => {
  response.send('Ok')
})

// Delete/Cancel Order
router.delete('/orders/:orderId', (request, response) => {
  response.send('Ok')
})
