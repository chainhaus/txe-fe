import { Button, ModalBody, ModalFooter, HSelect } from '@app/components';
import { useForm, SubmitHandler } from 'react-hook-form';
import { useCreateOrderMutation } from '@app/store/services/order';

import type { CreateOrderBody } from '@app/store/services/order/type';
import { useGlobalModal } from '@app/store/hooks';
import { useFetchClientsQuery } from '@app/store/services/client';
import { useFetchEventsQuery } from '@app/store/services/event';
import { useFetchTicketsQuery } from '@app/store/services/ticket';
import { Event } from '@app/types/event';

type Props = {
  id?: string;
};

export const OrderForm = ({ id }: Props) => {
  const { closeGlobalModal } = useGlobalModal();
  const { data: clients } = useFetchClientsQuery({});
  const { data: events } = useFetchEventsQuery({});
  const { data: tickets } = useFetchTicketsQuery({});

  const [create, createState] = useCreateOrderMutation();
  const { handleSubmit, control } = useForm<CreateOrderBody>();

  const onSubmit: SubmitHandler<CreateOrderBody> = (data) => {
    create({
      event_id: data.event.id,
      ticket_id: data.ticket.id,
      customer_id: data.customer.id,
    })
      .unwrap()
      .then(() => closeGlobalModal());
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <ModalBody>
        <div className="row g-9 mb-8">
          <div className="col-md-12 fv-row">
            <HSelect
              label="Event"
              name="event"
              control={control}
              options={events}
              getOptionLabel={(option: any) => option.title}
              getOptionValue={(option: any) => option.id}
            />
          </div>
        </div>
        <div className="row g-9 mb-8">
          <div className="col-md-12 fv-row">
            <HSelect
              label="Ticket"
              name="ticket"
              control={control}
              options={tickets}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
            />
          </div>
        </div>
        <div className="row g-9 mb-8">
          <div className="col-md-12 fv-row">
            <HSelect
              label="Customer"
              name="customer"
              control={control}
              options={clients}
              getOptionLabel={(option: any) => option.name}
              getOptionValue={(option: any) => option.id}
            />
          </div>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button variant="light" className="me-3" onClick={closeGlobalModal}>
          Discard
        </Button>
        <Button type="submit" variant="primary" isLoading={createState.isLoading}>
          Submit
        </Button>
      </ModalFooter>
    </form>
  );
};
