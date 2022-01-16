import { Suspense as CustomSuspense } from 'react'

export const Suspense: React.FC = ({ children }): React.ReactElement => {
    return (
        <CustomSuspense fallback={() => <h3>در حال بارگذاری ...</h3>}>
            {children}
        </CustomSuspense>
    )
}
