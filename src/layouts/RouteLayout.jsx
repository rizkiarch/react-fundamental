import { Link, Outlet } from "react-router-dom";

function RouteLayout() {
    return(
        <>
        <Link to="/">Home</Link> |  <Link to="/blog">Blog</Link> |<Link to="/about">About</Link>
        <p></p>
        <Outlet />
        </>
    )
}

export default RouteLayout;