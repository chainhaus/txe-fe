import {
  HTextField,
  Button,
  ModalBody,
  ModalFooter,
  HDatePicker,
  HSwitch,
  HTimePicker,
  FormSkeleton,
} from '@app/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import {
  useCreateEventMutation,
  useUpdateEventMutation,
  useGetEventQuery,
} from '@app/store/services/event';
import { utcToZonedTime, zonedTimeToUtc } from 'date-fns-tz';
import { parseISO } from 'date-fns';

import type { CreateEventPayload } from '@app/store/services/event/type';
import { useGlobalModal } from '@app/store/hooks';
import { eventValidation } from '@app/validations/event';
import { useEffect } from 'react';

type Props = {
  id?: string;
};

export const EventForm = ({ id }: Props) => {
  const { closeGlobalModal } = useGlobalModal();
  const { data, isLoading, isSuccess } = useGetEventQuery(id || '', {
    skip: !id,
  });
  const [create, createState] = useCreateEventMutation();
  const [update, updateState] = useUpdateEventMutation();
  const { handleSubmit, control, reset } = useForm<CreateEventPayload>({
    resolver: eventValidation,
  });

  useEffect(() => {
    if (isSuccess) {
      reset({
        title: data?.title,
        date: parseISO(data?.date || new Date().toISOString()),
        start_time: parseISO(data?.start_time || new Date().toISOString()),
        end_time: parseISO(data?.end_time || new Date().toISOString()),
        location: data?.location,
        enabled: data?.enabled || true,
        private: data?.private || true,
      });
    }
  }, [isSuccess]);

  const onSubmit: SubmitHandler<CreateEventPayload> = async (data) => {
    console.log('data', data);
    try {
      if (id) {
        await update({ ...data, id }).unwrap();
      } else {
        await create(data).unwrap();
      }
      closeGlobalModal();
    } finally {
      console.log('finally');
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <FormSkeleton />
      ) : (
        <ModalBody>
          <div className="row g-9 mb-8">
            <div className="col-md-6 fv-row">
              <HTextField label="Title" name="title" control={control} />
            </div>
            <div className="col-md-6 fv-row fv-plugins-icon-container">
              <HDatePicker label="Date" name="date" control={control} />
            </div>
          </div>
          <div className="row g-9 mb-8">
            <div className="col-md-6 fv-row">
              <HTimePicker label="Start time" name="start_time" control={control} />
            </div>
            <div className="col-md-6 fv-row fv-plugins-icon-container">
              <HTimePicker label="End time" name="end_time" control={control} />
            </div>
          </div>
          <div className="row g-9">
            <div className="col-md-12 fv-row">
              <HTextField label="Location" name="location" control={control} />
            </div>
          </div>
          <div className="row g-9">
            <div className="col-md-6 fv-row">
              <HSwitch label="Enable" title="yes" name="enabled" control={control} />
            </div>
            <div className="col-md-6 fv-row fv-plugins-icon-container">
              <HSwitch label="Private" title="yes" name="private" control={control} />
            </div>
          </div>
        </ModalBody>
      )}
      <ModalFooter>
        <Button variant="light" className="me-3" onClick={closeGlobalModal}>
          Discard
        </Button>
        <Button
          type="submit"
          variant="primary"
          isLoading={createState.isLoading || updateState.isLoading}
        >
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};
