import style from './style.module.scss'
import clsx from 'clsx'

export const Section: React.FC<{ className?: string }> = ({
    children,
    className,
}): React.ReactElement => {
    return (
        <section className={clsx(className, style.section)}>
            <div className={style.container}>{children}</div>
        </section>
    )
}
