import React, { useContext } from 'react'
import { UserContext } from "./App"

function ContextAPI() {
    const user = useContext(UserContext);
    return (
        <div style={{ color: "white", backgroundColor: "orange" }}>
            {user}
        </div>
    )
}

export default ContextAPI