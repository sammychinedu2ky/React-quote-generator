import React from "react";
//import "./styles.css";
export function Quotes(props) {
  return (
    <div className="card-content white-text">
      <span className="card-title">Quote</span>
      <p>
        <i className="material-icons">format_quote</i>
        {props.content}
        <i className="material-icons">format_quote</i>
      </p>
      <div className="right-align yellow-text">-{props.title}</div>
    </div>
  );
}
