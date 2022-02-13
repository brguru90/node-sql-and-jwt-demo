import React from "react"
import {useState} from "react"
import {Link} from "react-router-dom"
import "./style.scss"

export default function login() {
    const [email, setEmail] = useState(null)

    const Login = () => {
        alert(email)
    }

    return (
        <div className="login">
            <center>
                <h1>Login</h1>
            </center>
            <br />

            <fieldset>
                <legend>User detail</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input
                                    type="text"
                                    onChange={(e) => setEmail(e.target.value)}
                                />
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input type="button" value="Login" onClick={Login} />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>

            <label>
                New user? <Link to="/signup">Sign up</Link>
            </label>
        </div>
    )
}
