import React from "react"
import {Link} from "react-router-dom"

export default function login() {
    return (
        <div>
            <center>
                <h1>Signup</h1>
            </center>
            <br />
            <label>
                Already have account? <Link to="/">Login</Link>
            </label>
        </div>
    )
}
