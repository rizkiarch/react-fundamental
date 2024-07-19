import { createBrowserRouter } from "react-router-dom";
import RouteLayout from "../layouts/RouteLayout";
import Homepage from "../pages";
import Blog from "../pages/blogs";
import About from "../pages/About";

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
                },{
                    path: "/about",
                    element: <About/>,
                },
        ],
    },
]);