export interface Ticket {
  id: string
  name: string
  price: number
  note: string
  serviceFee: number
}

export interface Delivery {
  id: string
  name: string
  price: number
  estimated: string
  description: string
}