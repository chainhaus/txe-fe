export type GetClientParams = {
  open_to_partnership?: string;
};

export type GenerateKeyPayload = {
  id: string;
};

export type EventChangeStatusPayload = {
  id: string;
  enabled: boolean;
};
