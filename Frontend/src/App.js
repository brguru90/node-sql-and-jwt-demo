import React, {Component} from "react"
import "./App.scss"
import {BrowserRouter as Router, HashRouter, Switch, Route} from "react-router-dom"
import SignUp from "./pages/signup.jsx"
import Login from "./pages/login.jsx"
import userProfile from "./pages/user_profile.jsx"

export default class App extends Component {
    render() {
        return (
            <div className="App">
                <Router>
                    <Switch>
                        <HashRouter>
                            <Switch>
                                <Route path="/" exact component={Login} />
                                <Route path="/signup" exact component={SignUp} />
                                <Route
                                    path="/user_profile"
                                    exact
                                    component={userProfile}
                                />
                            </Switch>
                        </HashRouter>
                    </Switch>
                </Router>
            </div>
        )
    }
}
