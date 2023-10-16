import { Order } from "../types/Order";

export const orders: Order[] = [
	{
		"_id": "652da71914c6e8092c8f78db",
		"table": "10",
		"status": "WAITING",
		"products": [
			{
				"product": {
					"name": "Pizza Quatro Queijos",
					"imagePath": "1697490063219-quatro-queijos.png",
					"price": 40,
				},
				"quantity": 2,
				"_id": "652da71914c6e8092c8f78dc"
			},
			{
				"product": {
					"name": "Coca-Cola Lata",
					"imagePath": "1697490307578-coca-cola.png",
					"price": 7,
				},
				"quantity": 3,
				"_id": "652da71914c6e8092c8f78dd"
			}
		],
	}
]
