export type CreatePartnerPayload = {
  requested_by_client_id: number;
  requested_of_client_id: number;
  rev_share_pct: number;
};

export interface UpdatePartnerPayload {
  id: number;
  authorized?: boolean;
}
