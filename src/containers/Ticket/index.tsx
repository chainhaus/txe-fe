import { Button, Table, TableSkeleton } from '@app/components';
import type { Ticket } from '@app/types/ticket';
import { useParams } from 'react-router-dom';
import { createColumnHelper } from '@tanstack/react-table';
import { useDisableTicketMutation, useFetchTicketsQuery } from '@app/store/services/ticket';
import { useConfirm, useGlobalModal } from '@app/store/hooks';
import { TicketForm } from './Components/Form';

const columnHelper = createColumnHelper<Ticket>();

export default function TicketScreen() {
  const params = useParams<{ eventId: string }>();
  const { data, isLoading, isSuccess } = useFetchTicketsQuery({ eventId: params.eventId || '' });
  const { openGlobalModal } = useGlobalModal();
  const { openConfirm } = useConfirm();
  const [disable] = useDisableTicketMutation();

  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('price', {
      header: () => 'Price',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('enabled', {
      header: () => 'Status',
      cell: (info) => (info.getValue() ? 'Enabled' : 'Disabled'),
    }),
    columnHelper.accessor('id', {
      header: () => 'Action',
      cell: (info) => (
        <div>
          {info.row.original.enabled && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => disable({ id: String(info.getValue()), enabled: false }),
                })
              }
            >
              <i className="ki-outline ki-eye-slash fs-3"></i> Disable
            </Button>
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
              <h2>Ticket</h2>
              <Button
                type="button"
                variant="primary"
                onClick={() =>
                  openGlobalModal({
                    show: true,
                    title: 'Create Event',
                    content: <TicketForm eventId={params.eventId || ''} />,
                  })
                }
              >
                Add Ticket
              </Button>
            </div>
          </div>
        </div>
        <div className="card-body pt-0">
          {isLoading && <TableSkeleton />}
          {isSuccess && <Table columns={columns} data={data} />}
        </div>
      </div>
    </div>
  );
}
