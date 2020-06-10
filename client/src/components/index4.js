import React from "react";
import "./style.css";

// The ...props means, spread all of the passed props onto this element
// That way we don't have to define them all individually
function DeleteBtn(props) {
    return (
        <div>
            <h1>DeleteBtn</h1>
        </div>
    );
}

export default DeleteBtn;
