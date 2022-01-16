import { menus } from 'i18n/faIR'

export type ROUTES = { [key in keyof typeof menus]?: any }

export type PagesRoutes = keyof typeof menus

export enum Api {
    ConfirmMobile = 'Account/ConfirmMobile',
    Login = 'Account/Login',
    RefreshToken = 'Account/RefreshToken',
    Logout = 'Account/Logout',
}

export const ApiKey = Object.keys(Api).reduce(
    (acc, cur) => ({ ...(acc as any), [cur]: cur }),
    {} as keyof Api
)

export interface Options {
    [key: string]: any
}

export interface MyValues {
    [key: string]: string | null | { name: string }
}

export enum ROUTESURL {
    signin = 'signin',
    home = '/',
}
