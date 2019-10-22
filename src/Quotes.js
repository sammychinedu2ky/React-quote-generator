import React from "react";
//import "./styles.css";
export function Quotes({ title, content }) {
  return (
    <div className="card-content white-text">
      <span className="card-title">Quote</span>
      <p>
        <i className="material-icons">format_quote</i>
        {content}
        <i className="material-icons">format_quote</i>
      </p>
      <div className="right-align yellow-text">-{title}</div>
    </div>
  );
}
