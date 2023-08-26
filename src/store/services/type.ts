export type CommonResponse<T> = {
  message?: string;
  error?: boolean;
  data?: T;
  success?: 0 | 1;
};
