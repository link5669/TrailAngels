import { Outlet, Link } from "react-router-dom";

import '../styles/SignUp.css'

const SignUp = () => {
    return (
        <>
            <nav className="signup">
                <ul>
                    <li>
                        <img src="" alt="" />
                        <Link to="/backpacker-signup">Backpacker</Link>
                    </li>
                    <li>
                        <img src="" alt="" />
                        <Link to="/angel-signup">Trail Angel</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default SignUp;