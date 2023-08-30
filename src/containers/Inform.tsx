import { useInform } from '@app/store/hooks';
import Toast from 'react-bootstrap/Toast';
import { useEffect } from 'react';

export const Inform = () => {
  const state = useInform();

  useEffect(() => {
    if (state.show) {
      const id = setTimeout(() => {
        state.closeInform();
      }, 5000);
      return () => {
        clearTimeout(id);
      };
    }
  }, [state.show]);

  if (!state.show) {
    return null;
  }

  return (
    <div className="position-absolute top-0 end-0 p-3">
      <Toast bg={state.type} onClose={state.closeInform}>
        <Toast.Header>
          <strong className="me-auto">{state.type}</strong>
        </Toast.Header>
        <Toast.Body className="text-white">{state.message}</Toast.Body>
      </Toast>
    </div>
  );
};
