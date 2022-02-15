import React, { useState, useRef, useEffect } from "react"
import { useLocation, useNavigate } from "react-router-dom"
import {exeFetch} from "../../modules"
import "./style.scss"


export default function user_profile() {
    let { state } = useLocation()
    let navigate = useNavigate()

    const [userData, setUserData] = useState({ uuid: state?.uuid })
    let email = useRef(null)
    let name = useRef(null)
    let description = useRef(null)

    const gerUserData = () => {
        exeFetch("/api/user?uuid=" + state?.uuid)
            .then(({ body }) => {
                setUserData(body.data)
            })
            .catch(e => alert("Error\n" + JSON.stringify(e)))
    }

    const updateUserData = () => {
        const newUserData = {
            email: email.current.value,
            name: name.current.value,
            description: description.current.value,
        }

        exeFetch("/api/user", {
            method: "put",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({
                newUserData,
            }),
        })
            .then(() => {
                newUserData.uuid=userData.uuid
                setUserData(newUserData)
            })
            .catch(e => alert("Error\n" + JSON.stringify(e)))
    }

    const removeAccount = () => {
        exeFetch("/api/user", {
            method: "delete",
        })
            .then(({ body }) => {
                alert(JSON.stringify(body))
                navigate("/signup")
            })
            .catch(e => alert("Error\n" + JSON.stringify(e)))
    }

    const Logout = () => {
        exeFetch("/api/user/logout", {}, () => navigate("/"))
            .then(({ body, err }) => {
                console.log(body, err)
                if (err) {
                    alert("Error\n" + JSON.stringify(body))
                } else {
                    navigate("/")
                }
            })
    }




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
                <form>
                    <fieldset>
                        <legend>User detail</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td>UUID</td>
                                    <td>
                                        <input
                                            type="text"
                                            disabled
                                            value={userData?.uuid || ""}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>
                                        <input
                                            type="text"
                                            disabled
                                            value={userData?.name || ""}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input
                                            type="text"
                                            disabled
                                            value={userData?.email || ""}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Detail</td>
                                    <td>
                                        <pre className="ver_resizable">
                                            {userData?.description || ""}
                                        </pre>
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </fieldset>
                </form>

                <form>
                    <fieldset>
                        <legend>Update User detail</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td>UUID</td>
                                    <td>
                                        <input
                                            type="text"
                                            disabled
                                            value={userData?.uuid || ""}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Username</td>
                                    <td>
                                        <input
                                            type="text"
                                            defaultValue={userData?.name || ""}
                                            ref={name}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Email</td>
                                    <td>
                                        <input
                                            type="text"
                                            defaultValue={userData?.email || ""}
                                            ref={email}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td>Detail</td>
                                    <td>
                                        <textarea
                                            className="ver_resizable"
                                            ref={description}
                                            defaultValue={userData?.description || ""}
                                        ></textarea>
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
                </form>

                <form>
                    <fieldset>
                        <legend>Delete User detail</legend>
                        <table>
                            <tbody>
                                <tr>
                                    <td>UUID</td>
                                    <td>
                                        <input
                                            type="text"
                                            disabled
                                            value={userData?.uuid || ""}
                                        />
                                    </td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>&nbsp;</td>
                                </tr>
                                <tr>
                                    <td colSpan={2}>
                                        <input
                                            type="button"
                                            value="Logout"
                                            onClick={Logout}
                                        />
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
                </form>
            </div>
        </div>
    )
}