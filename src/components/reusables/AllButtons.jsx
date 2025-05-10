export const Button = ({ children, onClick, type, className }) => {
    return (
        <button
            className={`bg-none border-none text-t1 ${className}`}
            onClick={onClick}
            type={type}>{children}</button>
    )
}