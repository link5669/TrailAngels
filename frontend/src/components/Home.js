import '../styles/Home.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import AngelSignUp from './AngelSignUp.js'
import SignUp from './SignUp.js'
import Login from './Login'
import Empty from './Empty.js'
import BackpackerSignUp from './BackpackerSignUp.js'

const Home = () => {
    return (
        <div className="hero-section">
            <div className="section-column">
                <div className="card">
                    <img src={process.env.PUBLIC_URL + "/" + "hiking-home.jpg"} alt="backpackers hiking on a trail" />
                </div>

            </div>
            <div className="section-column">

                <h1>Feel the spark on your next journey</h1>
                <p>
                    <strong>Trail Angels</strong> are volunteers who go above and beyond to make life easier for hikers. Spending
                    weeks or months on a trail can be a lot to bear. Luckily, Trail Angels are there to spread <strong>Trail Magic</strong>:
                    food, rides, shelter, and more! Anyone can be a Trail Angel regardless
                    of backpacking exprience.
                    <br></br>
                    <br></br>
                    Spreading Trail Magic among travellers has been a tradition in the outdoor community
                    for decades. See how Trail Magic can play a role in your life!
                </p>
                <div className="signup-buttons">
                    <Routes>
                        <Route path="/" element={<SignUp />}>
                            <Route path="backpacker-signup" element={<BackpackerSignUp />} />
                            <Route path="angel-signup" element={<AngelSignUp />} />
                        </Route>
                    </Routes>
                </div>
            </div>
        </div>
    );
};

export default Home;