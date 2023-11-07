export type CreateAffiliatePayload = {
  requested_by_client_id: number;
  requested_of_client_id: number;
  rev_share_pct: number;
};

export interface UpdateAffiliatePayload {
  id: number;
  authorized?: boolean;
}
