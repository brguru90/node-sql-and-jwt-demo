import React from "react"
import {useState} from "react"
import {Link, useNavigate} from "react-router-dom"

import "./style.scss"

export default function login() {
    let navigate = useNavigate()
    const [email, setEmail] = useState(null)

    const Login = () => {
        fetch("/api/login", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                email: email,
            }),
        })
            .then(async (res) => {
                if (res.ok) {
                    return {
                        body: await res.json(),
                    }
                }
                return {
                    err: res.status,
                    body: await res.json(),
                }
            })
            .then(({body, err}) => {
                console.log(body, err)
                if (err) {
                    alert("Error\n" + JSON.stringify(body))
                } else {
                    navigate("/user_profile", {
                        state: body.data,
                    })
                }
            })
    }

    return (
        <div className="login">
            <center>
                <h1>Login</h1>
            </center>
            <br />

            <form>
                <fieldset>
                    <legend>User detail</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input
                                        type="email"
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
            </form>

            <label>
                New user? <Link to="/signup">Sign up</Link>
            </label>
        </div>
    )
}
