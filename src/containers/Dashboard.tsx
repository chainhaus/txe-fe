import { Button, Table, TableSkeleton } from '@app/components';
import type { Event } from '@app/types/event';
import { createColumnHelper } from '@tanstack/react-table';
import { useFetchEventsQuery } from '@app/store/services/event';

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor('title', {
    header: () => 'title',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    header: () => 'Date',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('start_time', {
    header: () => 'Start Time',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('end_time', {
    header: () => 'End Time',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('location', {
    header: () => 'Location',
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('id', {
    header: () => 'Action',
    cell: (info) => (
      <div>
        <Button variant="primary" className="me-2">
          <i className="ki-outline ki-eye fs-3"></i>
        </Button>
        <Button variant="secondary" className="me-2">
          <i className="ki-outline ki-pencil fs-3"></i>
        </Button>
        <Button variant="success">
          <i className="ki-outline ki-cheque fs-3"></i>
        </Button>
      </div>
    ),
  }),
];

export default function Dashboard() {
  const { data, isLoading, isSuccess } = useFetchEventsQuery({});
  return (
    <div className="app-content flex-column-fluid ">
      <div className="card d-flex flex-column flex-row-fluid">
        <div className="card-header border-0 pt-6">
          <div className="card-toolbar w-100">
            <div
              className="d-flex justify-content-between w-100"
              data-kt-customer-table-toolbar="base"
            >
              <h2>Event</h2>
              <Button type="button" variant="primary">
                Add Event
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
