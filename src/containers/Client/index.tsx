import { Button, Table, TableSkeleton } from '@app/components';
import type { Ticket } from '@app/types/ticket';
import { createColumnHelper } from '@tanstack/react-table';
import { useFetchClientsQuery, useChangeStatusClientMutation } from '@app/store/services/client';
import { useConfirm } from '@app/store/hooks';
import { TicketForm } from './Components/Form';

const columnHelper = createColumnHelper<Ticket>();

export default function ClientScreen() {
  const { data, isLoading, isSuccess } = useFetchClientsQuery({});
  const { openConfirm } = useConfirm();
  const [onChange] = useChangeStatusClientMutation();

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
              <i className="ki-outline ki-eye-slash fs-3"></i>
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
              <h2>Client</h2>
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
