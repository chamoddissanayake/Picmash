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

function App() {
    return (
        <Router>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                    <Link to="/login">Login</Link>
                </li>
                <li>
                    <Link to="/register">Register</Link>
                </li>
                <li>
                    <Link to="/sell">Sell</Link>
                </li>
            </ul>


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
            </Switch>

            <Footer/>
        </Router>
    );
}

export default App;
