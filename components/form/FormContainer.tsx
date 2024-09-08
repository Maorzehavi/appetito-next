'use client';

import { useFormState } from 'react-dom';
import { useEffect, useState } from 'react';
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
  const [showToast, setShowToast] = useState(false); // Manage toast visibility

  useEffect(() => {
    if (state.message) {
      setShowToast(true);
    }
  }, [state]);

  return (
    <form action={formAction}>
      {children}
      {showToast && <Toast message={state.message} onClose={() => setShowToast(false)} />} {/* Conditionally render Toast */}
    </form>
  );
}
export default FormContainer;
