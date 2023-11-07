import { User } from './user';

export type Affiliate = {
  id: number;
  requested_by_client_id: number;
  requested_of_client_id: number;
  requested_by_client: User;
  requested_of_client: User;
  rev_share_pct: number;
  authorized: boolean;
};
