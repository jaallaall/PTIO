import Dashboard from 'components/Dashboard'
import Header from 'components/Header'
import { menus } from 'i18n/faIR'
import { useState } from 'react'
import { Outlet } from 'react-router'
import { Suspense } from 'utils'
import style from './style.module.scss'

export type PagesRoutes = keyof typeof menus

const Layout: React.FC<{ isShowFooter?: boolean }> = ({
    isShowFooter,
}): React.ReactElement => {
    const [sidebar, setSidebar] = useState<boolean>(true)
    const toggleDrawer = () => {
        setSidebar(!sidebar)
    }

    return (
        <>
            <Header
            // toggleDrawer={toggleDrawer}
            // open={sidebar}
            />
            <Dashboard open={sidebar} />
            <main className={style.main}>
                <Suspense>
                    <Outlet />
                </Suspense>
            </main>
        </>
    )
}

export default Layout
