import { useEffect } from 'react';

interface ToastProps {
    message: string;
    duration?: number;
    onClose: () => void; // Pass a function to close the toast
}

const Toast = ({ message, duration = 3000, onClose }: ToastProps) => {
    useEffect(() => {
        const timer = setTimeout(() => {
            onClose(); // Call the onClose function to hide the toast
        }, duration);
        return () => clearTimeout(timer);
    }, [message, duration, onClose]);

    return (
        <div className="toast toast-center">
            <div className="alert alert-success">
                <span>{message}</span>
            </div>
        </div>
    );
};

export default Toast;
