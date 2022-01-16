import clsx from 'clsx'
import style from './style.module.scss'

export const Button: React.FC<{
    type?: 'button' | 'submit' | 'reset'
    className?: string
    color?: 'primary' | 'success' | 'info'
}> = ({ type = 'button', className, children, color }): React.ReactElement => {
    const typeColor =
        color === 'primary'
            ? style.pirmary
            : color === 'success'
            ? style.success
            : color === 'info'
            ? style.info
            : style.default

    return (
        <button
            type={type}
            className={clsx(className, style.button, typeColor)}
        >
            {children}
        </button>
    )
}
