import React from "react";
import { useState } from "react";

const LoginForm = () => {
    const [userename, setUsername] = useState("");
    const [password, setPassword] = useState("");

    return(
        <div className="border-4 border-black">
            <div>
                <span>username: </span>
                <input type="text" value={userename} />
                </div>
            <div>
                <span>password: </span>
                <input type="text" value={password} />
                </div>
        </div>
    )
}
export default LoginForm;