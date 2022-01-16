import { Location } from 'history'
import { domain, menus } from 'i18n/faIR'
import { PagesRoutes, ROUTESURL } from 'interfaces'
import Layout from 'layouts'
import { Helmet } from 'react-helmet'
import { useLocation } from 'react-router'
import { Navigate } from 'react-router-dom'
import { importDemo } from './lazy'
import { appRoutes } from './routes'

const routes = (
    isLoggedIn: boolean | string
): {
    path: any
    element: JSX.Element
    children: {
        path: any
        element: JSX.Element
    }[]
}[] => {
    const { pathname, state }: Location = useLocation()

    const tit =
        pathname === ROUTESURL.home
            ? menus.home
            : (menus as any)[pathname?.split('/')[1] as PagesRoutes]

    return [
        {
            path: ROUTESURL.home,
            element: isLoggedIn ? (
                <>
                    <Helmet title={domain + ' | ' + tit} />
                    <Layout />
                </>
            ) : (
                <Navigate to={ROUTESURL.signin} />
            ),
            children: appRoutes.map(({ path, element }) => {
                // const Element = (pages as any)[element]
                const Element = importDemo(element)
                return {
                    path: path,
                    element: <Element />,
                }
            }),
        },
        // {
        //     path: ROUTESURL.home,
        //     element: !isLoggedIn ? (
        //         <>
        //             <Helmet title={domain + ' | ' + tit} />
        //             <AuthLayout />
        //         </>
        //     ) : (
        //         <Navigate to={ROUTESURL.home} />
        //     ),
        //     children: [
        //         { path: ROUTESURL.signin, element: <pages.Login /> },
        //         {
        //             path: ROUTESURL.home,
        //             element: <Navigate to={ROUTESURL.signin} />,
        //         },
        //     ],
        // },
    ]
}

export default routes
