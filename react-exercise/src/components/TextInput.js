import React from "react"
import { useState } from "react"


const TextInput = () => {

    const [text, setText] = useState("");

    const handleChange = (event) => {
        setText(event.target.value)
    };

    return(
        <div>
            <input type="text" value={text} onChange={handleChange} />
            <p>valore: {text}</p>
        </div>
    )
}
export default TextInput ;