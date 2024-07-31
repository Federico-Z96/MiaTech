import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [userename, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div>
            <input type="text" value={userename} />
            <input type="text" value={password} />
        </div>
    )
}
export default LoginForm;