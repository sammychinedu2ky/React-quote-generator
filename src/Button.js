import React from "react";
//import "./styles.css";
export function Button(props) {
  return (
    <div className="card-action btn-container">
      <button className=".right-align btn-small hoverable">Prev</button>

      <div className="right">
        <button className="btn-small hoverable" onClick={props.request}>
          Next
        </button>
      </div>
    </div>
  );
}
