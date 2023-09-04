export type CreateEventPayload = {
  title: string;
  date: Date;
  start_time: Date;
  end_time: Date;
  location: string;
  enabled?: boolean;
  private?: boolean;
};

export type UpdateEventPayload = CreateEventPayload & {
  id: string;
};

export type StatusEventPayload = {
  id: string;
};
