'use client'
import { useFormStatus } from 'react-dom';
type SubmitButtonProps = {
    className?: string;
    text?: string;
    size? : 'md' | 'sm' | 'lg';
};

function SubmitButton(props: SubmitButtonProps) {
    const { pending } = useFormStatus();
    return (
        <button
            type='submit'
            disabled={pending}
            className={`capitalize btn ${props.className} ${props.size === 'sm' ? 'btn-sm' : props.size === 'lg' ? 'btn-lg' : 'btn-md'}`}
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