import './App.css';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Link
} from "react-router-dom";
import Home from "./components/home";
import Login from "./components/login";
import Register from "./components/register";
import Sell from "./components/sell";
import Footer from "./components/footer";
import Results from "./components/results";
import logo_image from '../src/assets/images/logo-new.png'
import Browse from "./components/browse";


function App() {
    return (
        <Router>
            {/*<ul>*/}
            {/*    <li>*/}
            {/*        <Link to="/">Home</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/login">Login</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/register">Register</Link>*/}
            {/*    </li>*/}
            {/*    <li>*/}
            {/*        <Link to="/sell">Sell</Link>*/}
            {/*    </li>*/}
            {/*</ul>*/}

            <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
                <div className="container-fluid">
                    <a href="/">
                        <img src={logo_image} alt="Logo" height={50}/>;
                    </a>

                    <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                            data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                            aria-expanded="false" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item">
                                <a className="nav-link" href="/browse">Browse Items</a>
                            </li>
                            <li></li>
                            <li className="nav-item">
                                <a className="nav-link" href="/sell">Sell My Items</a>
                            </li>


                        </ul>
                        <button className="btn btn-outline-success" type="submit">Login</button>
                        <div style={{width: "10px"}}></div>
                        <button className="btn btn-outline-success" type="submit">Register</button>
                    </div>
                </div>
            </nav>


            <Switch>
                <Route exact path="/">
                    <Home/>
                </Route>
                <Route path="/login">
                    <Login/>
                </Route>
                <Route path="/register">
                    <Register/>
                </Route>
                <Route path="/sell">
                    <Sell/>
                </Route>
                <Route path="/results">
                    <Results/>
                </Route>
                <Route path="/browse">
                    <Browse/>
                </Route>

            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
