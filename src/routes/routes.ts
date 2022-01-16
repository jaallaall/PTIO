import { menus } from 'i18n/faIR'
import { ROUTES } from 'interfaces'

export const AccessPermission = true

export const RoutesURL: ROUTES = Object.keys(menus)
    .splice(0, 9)
    .reduce((acc, cur) => ({ ...acc, [cur]: cur, home: '/' }), {})

const pagesReverse = Object.keys(menus).reduce(
    (acc, cur) => ({
        ...acc,
        [(menus as { [key: string]: string })[cur]]:
            cur[0].toUpperCase() + cur.slice(1),
    }),
    {}
)

export const routesMenu = Object.keys(RoutesURL).map((item) => {
    const allMenu = {
        name: (menus as any)[item],
        href: item === 'home' ? '/' : item,
        state: '',
    }
    return allMenu
})

// console.log(routesMenu);
export const appRoutes = routesMenu.map(({ href, name }) => {
    return {
        path: href,
        element: (pagesReverse as any)[name],
    }
})
