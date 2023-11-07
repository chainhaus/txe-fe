import { Button, Table, TableSkeleton } from '@app/components';
import type { Affiliate } from '@app/types/affiliate';
import { createColumnHelper } from '@tanstack/react-table';
import { useFetchPartnersQuery, useUpdatePartnerMutation } from '@app/store/services/affiliate';
import { useConfirm } from '@app/store/hooks';

const columnHelper = createColumnHelper<Affiliate>();

export default function CurrentPartner() {
  const { data, isLoading, isSuccess } = useFetchPartnersQuery({});
  const { openConfirm } = useConfirm();
  const [onChange] = useUpdatePartnerMutation();

  const columns = [
    columnHelper.accessor('requested_by_client', {
      header: () => 'By Client',
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor('requested_of_client', {
      header: () => 'Of Client',
      cell: (info) => info.getValue().name,
    }),
    columnHelper.accessor('id', {
      header: () => 'Action',
      cell: (info) => (
        <div>
          {!info.row.original.authorized && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => onChange({ id: info.getValue(), authorized: true }),
                })
              }
            >
              <i className="ki-outline ki-eye fs-3"></i> Authorize
            </Button>
          )}
          {info.row.original.authorized && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => onChange({ id: info.getValue(), authorized: false }),
                })
              }
            >
              <i className="ki-outline ki-eye-slash fs-3"></i> Revoke
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
              <h2>Current Partner</h2>
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
