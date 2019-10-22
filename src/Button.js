import React from "react";

export function ButtonContainer({prev, request}) {
  return (
    <div className="card-action btn-container">
      <button className=".right-align btn-small hoverable " onClick={prev}>Prev</button>

      <div className="right">
        <button className="btn-small hoverable" onClick={request}>
          Next
        </button>
      </div>
    </div>
  );
}
