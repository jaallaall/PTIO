import { useState } from 'react'
import { Link } from 'react-router-dom'
import { Icon } from 'utils'
import style from './style.module.scss'
import clsx from 'clsx'

const listItems: React.FC<{
    subMenu?: { [key: string]: any }[]
    name?: string
    openDrawer?: boolean
    subName?: string
    icon?: string
}> = ({ name, subMenu, openDrawer, subName, icon }): React.ReactElement => {
    const [open, setOpen] = useState(false)
    const handleClick = () => {
        setOpen(!open)
    }

    const list = subMenu ? subMenu : []
    return (
        <>
            <div
                onClick={list?.length > 0 ? handleClick : undefined}
                onKeyDown={list?.length > 0 ? handleClick : undefined}
                className={clsx(style.item, open ? style.active : '')}
            >
                <Icon name={icon} size={16} style={{ marginRight: 10 }} />
                <span className={style.flexAuto}>{name}</span>
                {list?.length > 0 ? (
                    open ? (
                        <Icon name="arrow-up" size={10} />
                    ) : (
                        <Icon name="arrow-down" size={10} />
                    )
                ) : null}
            </div>
            {list?.length > 0 && (
                <div className={style.dropdown} aria-expanded={open}>
                    <div style={{ padding: 10 }}>
                        {list?.map((item, i) => {
                            return (
                                <span key={i} className={style.link}>
                                    <Link to={item.href}>
                                        {subName ? item[subName] : ''}
                                    </Link>
                                </span>
                            )
                        })}
                    </div>
                </div>
            )}
        </>
    )
}

export default listItems
