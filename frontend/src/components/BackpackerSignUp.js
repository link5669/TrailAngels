
import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { create } from '../services/users'

export default function AngelSignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [isSeasonal, setIsSeasonal] = useState(null)

    let navigate = useNavigate();

    const routeChange = () => {
        let path = `/angel-specs`;
        navigate(path);
    }

    function handleSubmit(e) {
        e.preventDefault();
        if (firstName != ""
            && lastName != ""
            && email != ""
            && pass != ""
            && pass == confirmPass) {
            console.log("aa")
            create({ username: email, password: pass })
            routeChange()
            //route to next page
        }
        else window.alert("Please fill in all of the required information!")
    }

    return (
        <form onSubmit={handleSubmit}>
            <h3>First Name:</h3>
            <input
                type="text"
                id="input-first-name"
                autoComplete="off"
                onChange={(e) => { setFirstName(e.target.value) }}
            />
            <h3>Last Name:</h3>
            <input
                type="text"
                id="input-last-name"
                autoComplete="off"
                onChange={(e) => { setLastName(e.target.value) }}
            />
            <h3>Email:</h3>
            <input
                type="text"
                id="input-email"
                autoComplete="off"
                onChange={(e) => { setEmail(e.target.value) }}
            />
            <h3>Password:</h3>
            <input
                type="password"
                id="input-password"
                autoComplete="off"
                onChange={(e) => { setPass(e.target.value) }}
            />
            <h3>Confirm Password:</h3>
            <input
                type="password"
                id="input-password"
                autoComplete="off"
                onChange={(e) => { setConfirmPass(e.target.value) }}
            />
            <button type="submit" className="submit-angel-signup">
                Submit
            </button>
        </form>
    )

}