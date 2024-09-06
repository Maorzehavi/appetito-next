'use client';

import { useFormState } from 'react-dom';
import { useState, useEffect } from 'react';
import { actionFunction } from '@/utils/types';
import Toast from '../Toast'; // Assuming Toast is in the same folder

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
    const [state, formAction] = useFormState(action, initialState); // Get the state and form action from useFormState
    const [message, setMessage] = useState(''); // Manage the toast message separately
    const [showToast, setShowToast] = useState(false);

    useEffect(() => {
        if (state.message) {
            setMessage(state.message); // Set the message from form state
            setShowToast(true); // Show the toast when a message is present
        }
    }, [state.message]);

    const handleToastClose = () => {
        setShowToast(false); // Hide the toast after 3 seconds
        setMessage(''); // Clear the message
    };

    return (
        <div>
            {showToast && message && (
                <Toast message={message} duration={3000} onClose={handleToastClose} />
            )}
            <form action={formAction}>{children}</form>
        </div>
    );
}

export default FormContainer;
