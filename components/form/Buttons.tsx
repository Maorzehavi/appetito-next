'use client'
import { useFormStatus } from 'react-dom';
type SubmitButtonProps = {
    className?: string;
    text?: string;
};

function SubmitButton(props: SubmitButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button
            type='submit'
            disabled={pending}
            className={`capitalize btn btn-lg${props.className}`}
        >
            {pending ? (
                <>
                    <span className="loading loading-dots loading-md">Pleast wait...</span>
                </>
            ) : (
                props.text || 'Submit'
            )}
        </button>
    )
}

export default SubmitButton