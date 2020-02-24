import React from "react";
import "./style.css";

function Delete(props) {

    return <button className="delete-btn btn-danger" onClick={() => props.deleteSaved(props)}>Delete</button>
}

export default Delete;