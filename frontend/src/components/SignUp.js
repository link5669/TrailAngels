import { Outlet, Link } from "react-router-dom";

import '../styles/SignUp.css'

const SignUp = () => {
    return (
        <>
            <nav>
                <ul>
                    <li>
                        <Link to="/"></Link>
                    </li>
                    <li>
                        <Link to="/backpacker-signup">Backpacker</Link>
                    </li>
                    <li>
                        <Link to="/angel-signup">Trail Angel</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default SignUp;