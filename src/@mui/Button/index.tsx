import clsx from 'clsx'
import style from './style.module.scss'
import { Oval } from 'react-loader-spinner'

export const Button: React.FC<{
    type?: 'button' | 'submit' | 'reset'
    className?: string
    color?: 'primary' | 'success' | 'info'
    loading?: boolean
}> = ({
    type = 'button',
    className,
    children,
    color,
    loading,
}): React.ReactElement => {
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
            {loading && (
                <Oval
                    color="#fff"
                    wrapperClass={style.loader}
                    height={20}
                    width={20}
                />
            )}
            {children}
        </button>
    )
}
