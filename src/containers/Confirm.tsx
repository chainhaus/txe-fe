import { Modal } from 'react-bootstrap';
import { useConfirm } from '@app/store/hooks';

export const Confirm = () => {
  const { closeConfirm, show, onConfirm } = useConfirm();
  return (
    <Modal show={show}>
      <div className="swal2-popup swal2-modal swal2-icon-warning swal2-show">
        <div className="swal2-html-container" id="swal2-html-container">
          Are you sure you would like to action?
        </div>
        <div className="swal2-actions">
          <button
            type="button"
            className="swal2-confirm btn btn-primary"
            onClick={() => {
              onConfirm?.();
              closeConfirm();
            }}
          >
            Yes, cancel it!
          </button>
          <button
            type="button"
            className="swal2-cancel btn btn-active-light"
            onClick={closeConfirm}
          >
            No, return
          </button>
        </div>
      </div>
    </Modal>
  );
};
