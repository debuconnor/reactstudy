import React from "react";

function CreateUser({ username, email, usernameRef, onChange, onCreate }) {
    return (
        <div>
            <input
                name="username"
                placeholder="username"
                onChange={onChange}
                value={username}
                ref={usernameRef}
            />
            <input
                name="email"
                placeholder="email"
                onChange={onChange}
                value={email}
            />
            <button onClick={onCreate}>submit</button>
        </div>
    )
}

export default CreateUser;