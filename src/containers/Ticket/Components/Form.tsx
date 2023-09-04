import { HTextField, Button, ModalBody, ModalFooter, FormSkeleton } from '@app/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateTicketMutation } from '@app/store/services/ticket';

import type { CreateTicketForm } from '@app/store/services/ticket/type';
import { useGlobalModal } from '@app/store/hooks';
import { ticketValidation } from '@app/validations/ticket';

export const TicketForm = ({ eventId }: { eventId: string }) => {
  const { closeGlobalModal } = useGlobalModal();
  const [create, { isLoading }] = useCreateTicketMutation();
  const { handleSubmit, control } = useForm<CreateTicketForm>({
    resolver: ticketValidation,
  });

  const onSubmit: SubmitHandler<CreateTicketForm> = (data) => {
    create({ ...data, event_id: eventId || '' })
      .unwrap()
      .then(() => closeGlobalModal());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {isLoading ? (
        <FormSkeleton />
      ) : (
        <ModalBody>
          <div className="row g-9 mb-8">
            <div className="col-md-6 fv-row">
              <HTextField label="Name" name="name" control={control} />
            </div>
            <div className="col-md-6 fv-row fv-plugins-icon-container">
              <HTextField label="Price" name="price" control={control} type="number" />
            </div>
          </div>
        </ModalBody>
      )}
      <ModalFooter>
        <Button variant="light" className="me-3" onClick={closeGlobalModal}>
          Discard
        </Button>
        <Button type="submit" variant="primary" isLoading={isLoading}>
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};
