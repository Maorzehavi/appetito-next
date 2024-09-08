import { useEffect, useState } from 'react';

interface ToastProps {
  message: string;
  duration?: number;
}

const Toast = ({ message, duration = 3000 }: ToastProps) => {
  const [visible, setVisible] = useState(false); // Local visibility state

  useEffect(() => {
    if (message) {
      setVisible(true); // Show toast when there's a message
      const timer = setTimeout(() => {
        setVisible(false); // Hide toast after the duration
      }, duration);
      return () => clearTimeout(timer); // Clean up the timer
    }
  }, [message, duration]);

  if (!visible) return null; // Don't render the toast if it's not visible

  return (
    <div className="toast toast-center">
      <div className="alert alert-success">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
