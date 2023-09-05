export type GetClientParams = {
  open_to_partnership?: 'true' | 'false';
};

export type GenerateKeyPayload = {
  id: string;
};

export type EventChangeStatusPayload = {
  id: string;
  enabled: boolean;
};
