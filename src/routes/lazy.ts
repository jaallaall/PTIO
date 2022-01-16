import { lazy } from 'react'

export const importDemo = (
    file: React.ReactNode
): React.LazyExoticComponent<React.ComponentType<any>> => {
    return lazy(() =>
        import(`components/${file}`).catch(() =>
            console.log('Error in importing')
        )
    )
}
