import {
    Route,
    RouterProvider,
    createBrowserRouter,
    createRoutesFromElements,
} from "react-router-dom";
import Layout from "../View/Layout/Layout";
import HomePage from "../View/Pages/HomePage";
import { formAction } from "../View/Components/Form/UserForm";
import { webyLoader } from "../View/Components/loader";
import BlogPage, { blogLoader } from "../View/Pages/BlogPage";
import PostPage, { postLoader } from "../View/Pages/PostPage";
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
                    />
                    <Route path="blog"
                        element={<BlogPage />}
                        loader={blogLoader}
                    />

                    <Route path="blog/post/:title"
                        element={<PostPage />}
                        loader={postLoader} />
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
