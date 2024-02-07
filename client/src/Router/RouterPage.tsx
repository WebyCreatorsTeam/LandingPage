import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
/* PAGES & COMPONENTS */
import Layout from "../View/Components/Layout/Layout";
import App from "../App";
// import Project from "../View/Project";

const RouterPage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<Layout />}
            >
                <Route
                    index
                    element={<App />}
                />
                {/* <Route path="projects" element={<Project />} /> */}
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default RouterPage;
