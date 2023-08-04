import { Delivery, Ticket } from "../../MockData/types"

export interface Order {
  qty: number
  delivery: Delivery
  product: Ticket
}