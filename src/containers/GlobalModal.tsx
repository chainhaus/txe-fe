import { useGlobalModal } from '@app/store/hooks';
import { Modal } from '@app/components';

export const GlobalModal = () => {
  const state = useGlobalModal();

  return (
    <Modal show={state.show} title={state.title} onHide={() => state.closeGlobalModal()}>
      {state.content}
    </Modal>
  );
};
