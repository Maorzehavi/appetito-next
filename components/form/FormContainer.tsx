'use client';

import { useFormState } from 'react-dom';
import { actionFunction } from '@/utils/types';
import Toast from '../Toast';

const initialState = {
  message: '',
};

function FormContainer({
  action,
  children,
}: {
  action: actionFunction;
  children: React.ReactNode;
}) {
  const [state, formAction] = useFormState(action, initialState);

  return (
    <form action={formAction}>
      {children}
      {state.message && <Toast message={state.message} />} {/* Just pass the message */}
    </form>
  );
}

export default FormContainer;
