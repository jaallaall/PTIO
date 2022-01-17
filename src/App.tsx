import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Suspense } from 'utils'
import routes from './routes'
import { injectStyle } from 'react-toastify/dist/inject-style'
import { ToastContainer } from 'react-toastify'

const queryClient = new QueryClient()

if (typeof window !== 'undefined') {
    injectStyle()
}

function App() {
    const routing = useRoutes(routes(true))
    return routing
}

const AppWrapper = (): JSX.Element => {
    return (
        <QueryClientProvider client={queryClient}>
            <Suspense>
                <Router>
                    <App />
                </Router>
            </Suspense>
            <ReactQueryDevtools initialIsOpen={false} />
            <ToastContainer />
        </QueryClientProvider>
    )
}

export default AppWrapper
