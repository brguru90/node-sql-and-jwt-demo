import React, {useRef} from "react"
import {Link} from "react-router-dom"
import {useNavigate} from "react-router-dom"
import "./style.scss"

export default function login() {
    let navigate = useNavigate()

    let email = useRef(null)
    let name = useRef(null)
    let description = useRef(null)

    const createNewUser = () => {
        const newUserData = {
            email: email.current.value,
            name: name.current.value,
            description: description.current.value,
        }

        fetch("/api/user", {
            method: "post",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(newUserData),
        })
            .then(async (res) => {
                if (res.ok) {
                    return {
                        body: (await res.json()).data,
                    }
                }
                return {
                    err: res.status,
                    body: (await res.json()).data,
                }
            })
            .then(({body, err}) => {
                console.log(body, err)
                if (err) {
                    alert("Error\n" + JSON.stringify(body))
                } else {
                    navigate("/user_profile", {
                        state: body,
                    })
                }
            })
    }

    return (
        <div className="sign_up">
            <center>
                <h1>Signup</h1>
            </center>
            <br />

            <fieldset>
                <legend>User detail</legend>
                <table>
                    <tbody>
                        <tr>
                            <td>Username</td>
                            <td>
                                <input type="text" ref={name} />
                            </td>
                        </tr>
                        <tr>
                            <td>Email</td>
                            <td>
                                <input type="text" ref={email} />
                            </td>
                        </tr>
                        <tr>
                            <td>Detail</td>
                            <td>
                                <textarea
                                    className="ver_resizable"
                                    ref={description}
                                ></textarea>
                            </td>
                        </tr>
                        <tr>
                            <td colSpan={2}>
                                <input
                                    type="button"
                                    value="submit"
                                    onClick={createNewUser}
                                />
                            </td>
                        </tr>
                    </tbody>
                </table>
            </fieldset>

            <label>
                Already have account? <Link to="/">Login</Link>
            </label>
        </div>
    )
}
