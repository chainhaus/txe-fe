export type CreateTicketForm = {
  name: string;
  price: number;
};

export type CreateTicketPayload = CreateTicketForm & {
  event_id: string;
};

export type DisableEventPayload = {
  id: string;
  enabled: boolean;
};
