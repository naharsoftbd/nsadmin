export default function InputError({ message, className = '' }) {
    return message ? <p className={'text-sm ' + className}>{message}</p> : null;
}
