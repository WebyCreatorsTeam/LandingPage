import { Route, 
    RouterProvider, 
    createBrowserRouter, 
    createRoutesFromElements
} from 'react-router-dom'
/* PAGES & COMPONENTS */
import Layout from '../View/Components/Layout/Layout'
import App from '../App'
import { formAction } from '../View/Components/Form/formAction'

const RouterPage = () => {
    const router = createBrowserRouter(createRoutesFromElements(
        <Route path="/" element={<Layout />} action={formAction}>
            <Route index element={<App />} />

        </Route>
    ))
    return <RouterProvider router={router} />
}

export default RouterPage;