import { Button, Table, TableSkeleton } from '@app/components';
import type { Event } from '@app/types/event';
import { createColumnHelper } from '@tanstack/react-table';
import {
  useFetchEventsQuery,
  useDisableEventMutation,
  useEnableEventMutation,
} from '@app/store/services/event';
import { useConfirm, useGlobalModal } from '@app/store/hooks';
import { format, parseISO } from 'date-fns';
import { useNavigate } from 'react-router-dom';
import { EventForm } from './Components/Form';

const columnHelper = createColumnHelper<Event>();

export default function EventScreen() {
  const { data, isLoading, isSuccess } = useFetchEventsQuery({});
  const { openGlobalModal } = useGlobalModal();
  const { openConfirm } = useConfirm();
  const [enable] = useEnableEventMutation();
  const [disable] = useDisableEventMutation();
  const navigate = useNavigate();

  const columns = [
    columnHelper.accessor('title', {
      header: () => 'title',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('date', {
      header: () => 'Date',
      cell: (info) => info.getValue() && format(parseISO(info.getValue()), 'MM/dd/yyyy'),
    }),
    columnHelper.accessor('start_time', {
      header: () => 'Start Time',
      cell: (info) => info.getValue() && format(parseISO(info.getValue()), 'hh:mm'),
    }),
    columnHelper.accessor('end_time', {
      header: () => 'End Time',
      cell: (info) => info.getValue() && format(parseISO(info.getValue()), 'hh:mm'),
    }),
    columnHelper.accessor('location', {
      header: () => 'Location',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('id', {
      header: () => 'Action',
      cell: (info) => (
        <div>
          {!info.row.original.enabled && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => enable({ id: String(info.getValue()) }),
                })
              }
            >
              <i className="ki-outline ki-eye fs-3"></i>
            </Button>
          )}
          {!!info.row.original.enabled && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => disable({ id: String(info.getValue()) }),
                })
              }
            >
              <i className="ki-outline ki-eye-slash fs-3"></i>
            </Button>
          )}
          <Button
            variant="secondary"
            className="me-2"
            onClick={() =>
              openGlobalModal({
                show: true,
                title: 'Create Event',
                content: <EventForm id={String(info.getValue())} />,
              })
            }
          >
            <i className="ki-outline ki-pencil fs-3"></i>
          </Button>
          <Button
            variant="success"
            onClick={() => navigate(`/dashboard/ticket/event/${info.getValue()}`)}
          >
            <i className="ki-outline ki-cheque fs-3"></i>
          </Button>
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
              <h2>Event</h2>
              <Button
                type="button"
                variant="primary"
                onClick={() =>
                  openGlobalModal({
                    show: true,
                    title: 'Create Event',
                    content: <EventForm />,
                  })
                }
              >
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
