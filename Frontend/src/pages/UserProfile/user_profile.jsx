import React, {useState, useRef, useEffect} from "react"
import {useLocation} from "react-router-dom"
import "./style.scss"

export default function user_profile() {
    let {state} = useLocation()

    const [userData, setUserData] = useState({uuid: state.uuid})
    let email = useRef(null)
    let username = useRef(null)
    let details = useRef(null)

    const gerUserData = () => {}

    const updateUserData = () => {
        const newUserData = {
            email: email.current.value,
            username: username.current.value,
            details: details.current.value,
        }

        setUserData(newUserData)
    }

    const removeAccount = () => {}

    useEffect(() => {
        gerUserData()
    }, [])

    return (
        <div className="user_profile">
            <center>
                <h1>User profile</h1>
            </center>
            <br />

            <div className="form_container">
                <fieldset>
                    <legend>User detail</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>UUID</td>
                                <td>
                                    <input type="text" disabled value={userData?.uuid} />
                                </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>
                                    <input
                                        type="text"
                                        disabled
                                        value={userData?.username}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input type="text" disabled value={userData?.email} />
                                </td>
                            </tr>
                            <tr>
                                <td>Detail</td>
                                <td>
                                    <pre className="ver_resizable">
                                        {userData?.details}
                                    </pre>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

                <fieldset>
                    <legend>Update User detail</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>UUID</td>
                                <td>
                                    <input type="text" disabled value={userData?.uuid} />
                                </td>
                            </tr>
                            <tr>
                                <td>Username</td>
                                <td>
                                    <input
                                        type="text"
                                        value={userData?.username}
                                        ref={username}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Email</td>
                                <td>
                                    <input
                                        type="text"
                                        value={userData?.email}
                                        ref={email}
                                    />
                                </td>
                            </tr>
                            <tr>
                                <td>Detail</td>
                                <td>
                                    <textarea className="ver_resizable" ref={details}>
                                        {userData?.details}
                                    </textarea>
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input
                                        type="button"
                                        value="submit"
                                        onClick={updateUserData}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>

                <fieldset>
                    <legend>Delete User detail</legend>
                    <table>
                        <tbody>
                            <tr>
                                <td>UUID</td>
                                <td>
                                    <input type="text" disabled value={userData?.uuid} />
                                </td>
                            </tr>
                            <tr>
                                <td colSpan={2}>
                                    <input
                                        type="button"
                                        value="Delete my account"
                                        onClick={removeAccount}
                                    />
                                </td>
                            </tr>
                        </tbody>
                    </table>
                </fieldset>
            </div>
        </div>
    )
}
