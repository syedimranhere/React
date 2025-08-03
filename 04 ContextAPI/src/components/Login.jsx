import { useContext } from "react";
import React, { useState } from 'react';
import { UserContext } from "../context/UserContext.js"
const Login = () => {

    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    // use context helps us fetch info from userContext
    // we are setting entire user not just ID and PASS
    const { setUser } = useContext(UserContext)
    function handleSubmit(e) {
        e.preventDefault()
        //so now user doesnt only has a username but pass as well
        setUser({ username, password })
    }
    return (
        <div>
            <input type="text" placeholder="username" value={username} onChange={(e) => {
                setUsername(e.target.value)
            }} />
            <br />
            <input type="password" placeholder="password" value={password} onChange={(e) => {
                setPassword(e.target.value)
            }} />
            <br /><br />
            <button onClick={handleSubmit}>Submit</button>
        </div>
    );
};

export default Login;




































