interface ButtonProps {
    className?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    children: React.ReactNode;
    variant?: "primary" | "secondary";

}
const variantStyles = {
    primary: "bg-zinc-800 text-white",
    secondary: "bg-white text-zinc-800",
}
/**
 * @description Button component as a reusable component
 *
 * this components won't set any type like button or submit, all are button type as default
 *
 * - className: string
 * - onClick: (event: React.MouseEvent<HTMLButtonElement>) => void
 * - children: React.ReactNode
 * - variant: "primary" | "secondary"
 */
const Button: React.FC<ButtonProps> = ({
    className = "",
    onClick,
    children,
    variant = "primary",
}: ButtonProps) => {
    return (
        <button
            className={`px-4 py-2 rounded-md font-semibold  ${variantStyles[variant]} ${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}
export default Button;