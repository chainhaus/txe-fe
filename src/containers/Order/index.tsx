import { Button, Table, TableSkeleton, Select, Option } from '@app/components';
import type { Order } from '@app/types/order';
import { createColumnHelper } from '@tanstack/react-table';
import { useLazyFetchOrdersQuery, useUpdateOrderMutation } from '@app/store/services/order';
import { useGlobalModal, useConfirm } from '@app/store/hooks';
import { useEffect, useState } from 'react';
import { OrderForm } from './Components/Form';
import { useFetchEventsQuery } from '@app/store/services/event';
import { Event } from '@app/types/event';

const columnHelper = createColumnHelper<Order>();

export default function OrderScreen() {
  const [trigger, { data, isLoading, isSuccess }] = useLazyFetchOrdersQuery();
  const [update] = useUpdateOrderMutation();
  const { data: events } = useFetchEventsQuery({});
  const { openGlobalModal } = useGlobalModal();
  const { openConfirm } = useConfirm();
  const [selectedEvent, setEvent] = useState<Event | null>(null);

  useEffect(() => {
    trigger({ eventId: selectedEvent ? selectedEvent.id : undefined });
  }, [selectedEvent]);

  const columns = [
    columnHelper.accessor('event', {
      header: () => 'Event',
      cell: (info) => info.getValue().title,
    }),
    columnHelper.accessor('ticket', {
      header: () => 'Ticket',
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor('customer', {
      header: () => 'Customer',
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor('amount_paid', {
      header: () => 'Paid',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('fee_to_txe', {
      header: () => 'Fee',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('valid', {
      header: () => 'Status',
      cell: (info) => (info.getValue() ? 'Valid' : 'Invalid'),
    }),
    columnHelper.accessor('id', {
      header: () => 'Action',
      cell: (info) => (
        <div>
          {info.row.original.valid ? (
            <Button
              variant="danger"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => update({ id: info.getValue(), valid: false }),
                })
              }
            >
              <i className="ki-outline ki-cross fs-3"></i> Cancel
            </Button>
          ) : (
            'Cancelled'
          )}
        </div>
      ),
    }),
  ];

  return (
    <div className="app-content flex-column-fluid ">
      <div className="card d-flex flex-column flex-row-fluid">
        <div className="card-header border-0 pt-6">
          <div className="card-toolbar w-100">
            <div
              className="d-flex justify-content-between w-100"
              data-kt-customer-table-toolbar="base"
            >
              <h2>Order</h2>
              <div className="d-flex">
                <Select
                  placeholder="Select Event"
                  layout="horizontal"
                  options={events}
                  value={selectedEvent}
                  getOptionLabel={(option: any) => option.title}
                  getOptionValue={(option: any) => option.id}
                  onChange={(option: Event | null) => {
                    if (!!option) {
                      setEvent(option);
                    } else {
                      setEvent(null);
                    }
                  }}
                />
                <Button
                  type="button"
                  variant="primary"
                  className="ms-6"
                  onClick={() =>
                    openGlobalModal({
                      show: true,
                      title: 'Create Event',
                      content: <OrderForm />,
                    })
                  }
                >
                  Add Event
                </Button>
              </div>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          {isLoading && <TableSkeleton />}
          {isSuccess && <Table columns={columns} data={data || []} />}
        </div>
      </div>
    </div>
  );
}
