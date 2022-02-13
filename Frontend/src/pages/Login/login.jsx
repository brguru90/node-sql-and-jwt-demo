import React from "react"
import {Link} from "react-router-dom"

export default function login() {
    return (
        <div>
            <center>
                <h1>Login</h1>
            </center>
            <br />
            <label>
                New user? <Link to="/signup">Sign up</Link>
            </label>
        </div>
    )
}
