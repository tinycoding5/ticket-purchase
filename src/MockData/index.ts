import { Delivery, Ticket } from './types';

export const Tickets: Ticket[] = [{
  id: '10001',
  name: 'Resale Tickets',
  price: 229,
  note: 'xfr XFER Proof of at least one dose of COVID-19 vaccination for ages 5 to 11 and guests ages 12 and up will be required to show proof of two COVID-19 vaccine doses or one dose of the Johnson & Johnson vaccine. Masks must be worn.',
  serviceFee: 44.08,
}]

export const Deliveries: Delivery[] = [
  {
    id: '10002',
    name: 'Mobile Entry',
    price: 0,
    estimated: '04/03/2022',
    description: 'These mobile tickets will be transferred directly to you from a trusted seller. We\'ll email you instructions on how to accept them on the original ticket provider\'s mobile app.'
  }
]