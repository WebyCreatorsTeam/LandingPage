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

const RouterPage = () => {
    const router = createBrowserRouter(
        createRoutesFromElements(
            <Route
                path="/"
                element={<Layout />}
                action={formAction}
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

                <Route path="blog/post/:id"
                    element={<PostPage />}
                    loader={postLoader} />
            </Route>
        )
    );
    return <RouterProvider router={router} />;
};

export default RouterPage;
