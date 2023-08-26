import type { Experience, NearbyExp } from '@app/types/experience';

export interface ExperienceDetailReponse {
  totalRatingsCount: number;
  AverageRating: string;
  expDetail: Experience;
  favouriteStatus: number;
  ratingInfo: string[];
  nearbyExp: NearbyExp[];
}
