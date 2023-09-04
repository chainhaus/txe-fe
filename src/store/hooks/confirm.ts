import { useSelector, useDispatch } from 'react-redux';
import { RootState } from '../';
import { closeConfirm, ConfirmState, openConfirm } from '../reducers/confirm';

interface UseConfirmProps extends ConfirmState {
  closeConfirm: () => void;
  openConfirm: (payload: ConfirmState) => void;
}

export const useConfirm = (): UseConfirmProps => {
  const allState = useSelector((state: RootState) => state.confirm);
  const dispatch = useDispatch();

  return {
    ...allState,
    closeConfirm: () => dispatch(closeConfirm()),
    openConfirm: (payload: ConfirmState) => dispatch(openConfirm(payload)),
  };
};
