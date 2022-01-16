import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { BrowserRouter as Router, useRoutes } from 'react-router-dom'
import { Suspense } from 'utils'
import routes from './routes'

const queryClient = new QueryClient()

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
        </QueryClientProvider>
    )
}

export default AppWrapper
