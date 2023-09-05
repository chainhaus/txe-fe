import { Event } from './event';
import { Ticket } from './ticket';
import { User } from './user';

export type Order = {
  id: number;
  event_id: number;
  event: Event;
  ticket_id: number;
  ticket: Ticket;
  customer_id: number;
  customer: User;
  amount_paid?: number | null;
  fee_to_txe?: number | null;
  valid: true;
  createdAt: string;
  updatedAt: string;
};
