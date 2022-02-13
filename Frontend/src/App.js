import React, {Component} from "react"
import {HashRouter, Routes, Route} from "react-router-dom"
import SignUp from "./pages/SignUp/signup.jsx"
import Login from "./pages/Login/login.jsx"
import UserProfile from "./pages/UserProfile/user_profile.jsx"

export default class App extends Component {
    render() {
        return (
            <HashRouter>
                <Routes>
                    <Route path="/" exact element={<Login />} />
                    <Route path="signup" exact element={<SignUp />} />
                    <Route path="user_profile" exact element={<UserProfile />} />
                </Routes>
            </HashRouter>
        )
    }
}
