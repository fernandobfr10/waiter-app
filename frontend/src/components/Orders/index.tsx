import { OrdersBoard } from "../OrdersBoard";

import { Container } from "./styles";

import { orders } from '../../mocks/orders'

export function Orders() {
  return (
    <Container>
      <OrdersBoard icon="🕒" title="Fila de Espera" orders={orders} />
      <OrdersBoard icon="👩‍🍳" title="Em Preparação" orders={[]} />
      <OrdersBoard icon="✅" title="Pronto!" orders={[]} />
    </Container>
  )
}
