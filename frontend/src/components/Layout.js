import { Outlet, Link } from "react-router-dom";

import '../styles/Layout.css'

const Layout = () => {
    let username
    if (window.localStorage.getItem('loggedUser') != null) {
        username = "something"
    }
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"><h1>Trail Magic</h1></Link>
                    </li>
                    <li>
                        <p>{username}</p>
                        <Link to="/dashboard">Login</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default Layout;