import { Outlet, Link } from "react-router-dom";

import '../styles/SignUp.css'

const SignUp = () => {
    return (
        <>
            <nav className="signup">
                <ul>
                    <li>
                        <img src="" alt="backpack icon with a star illustration as the backpack closure" />
                        <Link to="/backpacker-signup">Encounter Magic as a Backpacker</Link>
                    </li>
                    <li>
                        <img src="" alt="angel icon with star illustrations as jewelry" />
                        <Link to="/angel-signup">Spread Magic as a Trail Angel</Link>
                    </li>
                </ul>
            </nav>

            <Outlet />
        </>
    )
};

export default SignUp;