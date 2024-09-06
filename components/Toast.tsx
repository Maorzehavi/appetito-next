import { useEffect } from 'react';

interface ToastProps {
    message: string;
    duration?: number;
    onClose: () => void;
}

const Toast = ({ message, duration = 3000, onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Call the onClose callback after the duration
        }, duration);

        return () => clearTimeout(timer); // Clean up the timer on unmount
    }, [duration, onClose]);

    return (
        <div className="toast toast-center">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
