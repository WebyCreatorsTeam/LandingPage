import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "../View/Components/Layout/Layout";
import HomePage from "../View/Pages/HomePage";

const RouterPage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<Layout />}
            >
                <Route
                    index
                    element={<HomePage />}
                />
                {/* <Route path="projects" element={<Project />} /> */}
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default RouterPage;
