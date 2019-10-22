import React from 'react';
export function Loader(props){
  if(props.show==='yes'){
    return (
      <div className="progress ">
      <div className="indeterminate"></div>
  </div>
    )}
    else return (
      <div className="progress blue-grey darken-1 ">
      <div className="indeterminate blue-grey darken-1 "></div>
  </div>
    )
  }
