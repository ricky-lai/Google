import React, { Component } from 'react';
import "./style.css"

function Save(props) {

        return <button className="save-btn btn-success" onClick={() => props.saveBook(props)}>Save</button>
}

export default Save;