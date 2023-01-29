import React from 'react';

export default function BackpackerSignUp() {

    function handleSubmit(e) {

    }

    return (
        <div className="login-wrapper">
            <h1>Please Log In</h1>
            <form onSubmit={handleSubmit}>
                <label>
                    <p>Username</p>
                    <input type="text" />
                </label>
                <label>
                    <p>Password</p>
                    <input type="password" />
                </label>

            </form>
        </div>
    )
}