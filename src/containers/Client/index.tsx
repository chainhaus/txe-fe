import { Button, Table, TableSkeleton, Select, Option } from '@app/components';
import type { User } from '@app/types/user';
import { createColumnHelper } from '@tanstack/react-table';
import {
  useFetchClientsQuery,
  useChangeStatusClientMutation,
  useGenerateKeyMutation,
  useLazyFetchClientsQuery,
} from '@app/store/services/client';
import { useConfirm } from '@app/store/hooks';
import { useEffect, useState } from 'react';

const columnHelper = createColumnHelper<User>();

export default function ClientScreen() {
  const [trigger, { data, isLoading, isSuccess }] = useLazyFetchClientsQuery();
  const { openConfirm } = useConfirm();
  const [onChange] = useChangeStatusClientMutation();
  const [onGenerate] = useGenerateKeyMutation();
  const [isPartner, setIsPartner] = useState<Option>({
    value: null,
    label: 'All',
  });

  useEffect(() => {
    if (typeof isPartner.value === 'string' || isPartner.value === null) {
      trigger({ open_to_partnership: isPartner.value === null ? undefined : isPartner.value });
    }
  }, [isPartner]);

  const columns = [
    columnHelper.accessor('name', {
      header: () => 'Name',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('email_address', {
      header: () => 'Email',
      cell: (info) => (
        <div>
          {info.getValue()}
          {info.row.original.email_verified && <i className="ki-outline ki-verify text-success" />}
        </div>
      ),
    }),
    columnHelper.accessor('role', {
      header: () => 'Role',
      cell: (info) => info.getValue(),
    }),
    columnHelper.accessor('api_key', {
      header: () => 'Key',
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
          {!info.row.original.enabled && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => onChange({ id: String(info.getValue()), enabled: true }),
                })
              }
            >
              <i className="ki-outline ki-eye fs-3"></i> Enable
            </Button>
          )}
          {info.row.original.enabled && (
            <Button
              variant="primary"
              className="me-2"
              onClick={() =>
                openConfirm({
                  show: true,
                  onConfirm: () => onChange({ id: String(info.getValue()), enabled: false }),
                })
              }
            >
              <i className="ki-outline ki-eye-slash fs-3"></i> Disable
            </Button>
          )}
          <Button
            variant="primary"
            className="me-2"
            onClick={() =>
              openConfirm({
                show: true,
                onConfirm: () => onGenerate({ id: String(info.getValue()) }),
              })
            }
          >
            <i className="ki-outline ki-key-square fs-3"></i> Generate Key
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
              <h2>Client</h2>
              <Select
                layout="horizontal"
                options={[
                  { value: null, label: 'All' },
                  { value: 'true', label: 'Possible Partner' },
                  { value: 'false', label: 'None Partner' },
                ]}
                value={isPartner}
                onChange={(option: Option | null) => {
                  if (!!option) {
                    setIsPartner(option);
                  }
                }}
              />
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
