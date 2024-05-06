import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "../View/Components/Layout/Layout";
import HomePage from "../View/Pages/HomePage";
import { webyLoader } from "../View/Components/Components/loader";
import BlogPage, { blogLoader } from "../View/Pages/BlogPage";
import PostPage, { postLoader } from "../View/Pages/PostPage";
import { formAction } from "../View/Components/Components/UserForm";
import Page404 from "./Page404";
import PageError from "./PageError";

const RouterPage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <>
                <Route
                    path="/"
                    element={<Layout />}
                    action={formAction}
                    errorElement={<PageError />}
                >
                    <Route
                        index
                        element={<HomePage />}
                        loader={webyLoader}
                        errorElement={<PageError />}
                    />
                    <Route path="blog"
                        element={<BlogPage />}
                        loader={blogLoader}
                        errorElement={<PageError />}
                    />

                    <Route path="blog/post/:id"
                        element={<PostPage />}
                        loader={postLoader}
                        errorElement={<PageError />} />
                </Route>
                <Route
                    path="*"
                    element={<Page404 />} />
            </>
        )
    );
    return <RouterProvider router={router} />;
};

export default RouterPage;
