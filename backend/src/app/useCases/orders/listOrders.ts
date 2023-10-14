import { Request, Response } from 'express'

import { Order } from '../../models/Order'

export async function listOrders(req: Request, res: Response) {
  try {
    const orders = await Order.find()
      .sort({ createdAt: 1 }) // 1 = ASC, -1 = DESC
      .populate('products.product')

    return res.json(orders)

  } catch (error) {
    console.error(error)
    res.sendStatus(500)
  }
}
