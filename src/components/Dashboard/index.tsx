import ListItems from './ListItems'
import style from './style.module.scss'

const list = [
    {
        name: 'Dashboard',
        id: 1,
        icon: 'icon_dashboard',
        subMenu: [{ name: 'list of users', id: 11, href: '/mission' }],
    },
    { name: 'Company', id: 2, icon: 'Vector' },
    {
        name: 'User Management',
        id: 3,
        icon: 'icon_user',
        subMenu: [
            { name: 'test3', id: 13, href: '/' },
            { name: 'test4', id: 14, href: '/' },
        ],
    },
]

const drawerWidth: number = 312

const Dashboard: React.FC<{
    open: boolean
}> = ({ open }): React.ReactElement => {
    return (
        <aside className={style.drawer}>
            <div
                style={{ height: '100%', width: open ? drawerWidth : 60 }}
                className={style.sidebar}
            >
                <nav aria-labelledby="nested-list-subheader">
                    {list.map((item) => {
                        return (
                            <ListItems
                                key={item.id}
                                name={item.name}
                                subMenu={item.subMenu}
                                openDrawer={open}
                                subName={'name'}
                                icon={item.icon}
                            />
                        )
                    })}
                </nav>
            </div>
        </aside>
    )
}

export default Dashboard
