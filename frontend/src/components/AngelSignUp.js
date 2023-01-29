
import React, {useState} from 'react'

export default function AngelSignUp() {

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [email, setEmail] = useState('')
    const [pass, setPass] = useState('')
    const [confirmPass, setConfirmPass] = useState('')
    const [isSeasonal, setIsSeasonal] = useState(null)

    function handleSubmit(e) {
        if (firstName != "" 
            && lastName != ""
            && email != ""
            && pass != ""
            && pass == confirmPass
            && isSeasonal != null ) {
            e.preventDefault();
            //route to next page
        }
    }
    
    return (
        <form onSubmit={handleSubmit}>
            <h3>First Name:</h3>
            <input
                type="text"
                id="input-first-name"
                autoComplete="off"
                onChange={(e) => {setFirstName(e.target.value)}}
            />
            <h3>Last Name:</h3>
            <input
                type="text"
                id="input-last-name"
                autoComplete="off"
                onChange={(e) => {setLastName(e.target.value)}}
            />
            <h3>Email:</h3>
            <input
                type="text"
                id="input-email"
                autoComplete="off"
                onChange={(e) => {setEmail(e.target.value)}}
            />
            <h3>Password:</h3>
            <input
                type="password"
                id="input-password"
                autoComplete="off"
                onChange={(e) => {setPass(e.target.value)}}
            />
            <h3>Confirm Password:</h3>
            <input
                type="password"
                id="input-password"
                autoComplete="off"
                onChange={(e) => {setConfirmPass(e.target.value)}}
            />
            <h3>When do you offer your service?</h3>
        <button type="submit" className="btn btn__primary btn__lg">
            Submit
        </button>
        </form>
    )

}