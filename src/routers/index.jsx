import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";

import Homepage from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/About";
import SinglePost from "../pages/blogs/_id";
import { post, getPostById } from "../apis/loader";

export const router= createBrowserRouter([
    {
        path: "/",
        element: <RouteLayout />,
        children: [
                {
                    path: "/",
                    element: <Homepage/>,
                },{
                    path: "/blog",
                    element: <Blog/>,
                    loader: post,
                },{
                    path: "/blog/:id",
                    element: <SinglePost/>,
                    loader: getPostById,
                },{
                    path: "/about",
                    element: <About/>,
                },
        ],
    },
]);