import { Button, Table } from '@app/components';
import type { Event } from '@app/types/event';
import { createColumnHelper } from '@tanstack/react-table';

const defaultData: Event[] = [
  {
    id: 1,
    title: 'string',
    date: 'string',
    start_time: 'string',
    end_time: 'string',
    location: 'string',
    enabled: true,
    private: true,
  },
  {
    id: 1,
    title: 'string',
    date: 'string',
    start_time: 'string',
    end_time: 'string',
    location: 'string',
    enabled: true,
    private: true,
  },
];

const columnHelper = createColumnHelper<Event>();

const columns = [
  columnHelper.accessor('title', {
    cell: (info) => info.getValue(),
  }),
  columnHelper.accessor('date', {
    cell: (info) => <i>{info.getValue()}</i>,
  }),
  columnHelper.accessor('start_time', {
    cell: (info) => info.renderValue(),
  }),
];

export default function Dashboard() {
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
          <Table columns={columns} data={defaultData} />
        </div>
      </div>
    </div>
  );
}
