import '../styles/Home.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Login from './Login.js'
import SignUp from './SignUp.js'
import Empty from './Empty.js'
import BackpackerSignUp from './BackpackerSignUp.js'

const Home = () => {
    return (
        <div className="hero-section">
            <div className="section-column-1">
            </div>
            <div className="section-column">
                <h1>Feel the spark on your next journey</h1>
                <p>
                    Little blurb on Trail Angels. And little blurb on backpacking
                    on a long trail. Goes here.
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                    eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                    enim ad minim veniam, quis nostrud exercitation ullamco laboris
                    nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                    officia deserunt mollit anim id est laborum.
                </p>
                <div className="signup-buttons">
                    <Routes>
                        <Route path="/" element={<SignUp />}>
                            <Route index element={<Empty />} />
                            <Route path="backpacker-signup" element={<BackpackerSignUp />} />
                        </Route>
                    </Routes>

                </div>
            </div>

        </div>

    );
};

export default Home;