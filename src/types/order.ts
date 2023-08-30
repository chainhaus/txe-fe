export type Order = {
  id: number;
  event_id: number;
  ticket_id: number;
  customer_id: number;
  amount_paid?: number | null;
  fee_to_txe?: number | null;
  valid: true;
  createdAt: string;
  updatedAt: string;
};
