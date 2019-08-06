import React from "react";
import { Button } from "./Button.js";
import { Loader } from "./Loader.js";
import { Quotes } from "./Quotes.js";
//import "./styles.css";
export class Card extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      content: "Quotes from wise men",
      title: "Sammychinedu2ky",
      show: "no"
    };
    this.makeRequest = this.makeRequest.bind(this);
    this.changeState = this.changeState.bind(this);
  }
 
   changeState(content, title) {
    
    this.setState((state, props) => ({
      content: content,
      title: title,
      show: state.show === "no" ? "yes" : "no"
    }));
  }
  makeRequest() {
    
    let xhttp = new XMLHttpRequest();
    this.setState((state, props) => ({ show: "yes" }));
    xhttp.responseType = "json";
    xhttp.onreadystatechange = ()=>{
      if (xhttp.status === 200) {
        let answer = xhttp.response;
        console.log(answer[0]);
        let { content, title } = answer[0];
       content=content.replace(/<\w+>|<\/\w+>|&#8217;|&#8211;|<br\/>/g,'');
       content=content.replace(/;(?=\w)/g,"'")
        //console.log(this)
      this.changeState(content, title);
      }
    };
    xhttp.open(
      "GET",
      "https://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1?" +
        new Date().getTime(),
      true
    );
    xhttp.send();
  }
  render() {
    return (
      <div className="container">
        <div className="row valign-wrapper">
          <div className="col m6 offset-m3 valign size ">
            <div className="card blue-grey darken-1 rem hoverable" >
              <Quotes content={this.state.content} title={this.state.title} />
              <Loader show={this.state.show} />
              <Button request={this.makeRequest} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
