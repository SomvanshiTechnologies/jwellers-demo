import React from 'react'

const Button = ({
    children,
    variant = 'filled',
    className = '',
    onClick,
    type = 'button',
    disabled = false,
    icon,
    iconPosition = 'right',
    ...props
}) => {
    const baseStyles = 'px-6 py-3 font-semibold uppercase tracking-wide transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2'

    const variants = {
        filled: 'bg-black text-white hover:bg-gray-800 active:bg-gray-900',
        outline: 'bg-transparent border-2 border-black text-black hover:bg-black hover:text-white active:bg-gray-900'
    }

    const variantStyles = variants[variant] || variants.filled

    return (
        <button
            type={type}
            onClick={onClick}
            disabled={disabled}
            className={`${baseStyles} ${variantStyles} ${className}`}
            {...props}
        >
            {icon && iconPosition === 'left' && <span className="icon">{icon}</span>}
            {children}
            {icon && iconPosition === 'right' && <span className="icon">{icon}</span>}
        </button>
    )
}

export default Button

