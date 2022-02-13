import React from 'react'
import "./style.scss"

export default function user_profile() {


  const gerUserData=()=>{

  }

  const updateUserData=()=>{

  }


  const removeUserData=()=>{

  }



  return (
    <div className='user_profile'>
      <center>
        <h1>
          User profile
        </h1>
      </center><br />

      <div className='form_container'>
        <fieldset>
          <legend>View User detail</legend>
          <table>
            <tr><td>UUID</td><td><input type="text" disabled /></td></tr>
            <tr><td>Username</td><td><input type="text" disabled /></td></tr>
            <tr><td>Email</td><td><input type="text" disabled /></td></tr>
            <tr><td>Detail</td><td><pre  className='ver_resizable' ></pre></td></tr>
            <tr>
              <td colSpan={2}>
                <input type="button" value="submit" />
              </td>
            </tr>
          </table>
        </fieldset>

        <fieldset>
          <legend>Update User detail</legend>
          <table>
            <tr><td>UUID</td><td><input type="text" disabled /></td></tr>
            <tr><td>Username</td><td><input type="text" /></td></tr>
            <tr><td>Email</td><td><input type="text" /></td></tr>
            <tr><td>Detail</td><td><pre contentEditable className='ver_resizable' ></pre></td></tr>
              <td colSpan={2}>
                {/* <input type="button" value="submit" /> */}
              </td>
          </table>
        </fieldset>

        <fieldset>
          <legend>Delete User detail</legend>
          <table>
            <tr><td>UUID</td><td><input type="text" disabled /></td></tr>
          </table>
        </fieldset>


      </div>


    </div>
  )
}
