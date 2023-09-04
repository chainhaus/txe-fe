import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../';
import { closeGlobalModal, GlobalModalState, openGlobalModal } from '../reducers/modal';

interface UseGlobalModalProps extends GlobalModalState {
  closeGlobalModal: () => void;
  openGlobalModal: (payload: GlobalModalState) => void;
}

export const useGlobalModal = (): UseGlobalModalProps => {
  const allState = useSelector((state: RootState) => state.globalModal);
  const dispatch = useDispatch();

  return {
    ...allState,
    closeGlobalModal: () => dispatch(closeGlobalModal()),
    openGlobalModal: (payload: GlobalModalState) => dispatch(openGlobalModal(payload)),
  };
};
