import React from "react";
// import "./style.css";

// This file exports both the List and ListItem components

export function Results({ children }) {
  return (
    <div className="results-overflow-container">
      <ul className="results-group">{children}</ul>
    </div>
  );
}

export function ResultsItem({ children }) {
  return <li className="results-group-item">{children}</li>;
}
