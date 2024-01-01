import { Route, 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements
} from 'react-router-dom'
/* PAGES & COMPONENTS */
import Layout from '../View/Components/Layout/Layout'
import App from '../App'

const RouterPage = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />}>
            <Route index element={<App />} />

        </Route>
    ))
    return <RouterProvider router={router} />
}

export default RouterPage;