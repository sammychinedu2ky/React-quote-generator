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
      show: "no",
      count: 0
    };
    this.store=[];
    this.makeRequest = this.makeRequest.bind(this);
    this.changeState = this.changeState.bind(this);
    this.prev = this.prev.bind(this);
  }
 
   changeState(content, title) {
    
    this.setState((state, props) => ({
      content: content,
      title: title,
      show: state.show === "no" ? "yes" : "no"
    }));
  }
  prev(){
    setTimeout(()=>{
      if(this.state.count<=this.store.length-1 && this.store.length!==0){
        this.setState((state)=>({show:'yes'}))
      }
    },0)
    setTimeout(() => {
      this.setState((state)=>({show:'no'}))
    }, 2000);
    setTimeout(()=>{
    this.setState((state)=>{
      if(state.count<=this.store.length-1 && this.store.length!==0){
        return {content:this.store[state.count][0],title:this.store[state.count][1],count:++state.count}
      }
    })},2000)
  }
  makeRequest() {
    
    let xhttp = new XMLHttpRequest();
    this.setState((state, props) => ({ show: "yes" }));
    xhttp.responseType = "json";
    xhttp.onreadystatechange = ()=>{
      if (xhttp.readyState == 4) {
        let answer = xhttp.response;
        //console.log(answer[0]);
        let { content, title } = answer[0];
       content=content.replace(/<\w+>|<\/\w+>|&#8217;|&#8211;|<br\/>/g,'');
       content=content.replace(/;(?=\w)/g,"'")
        //console.log(this)
      this.store=[[content,title],...this.store]
        
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
              <Button request={this.makeRequest} prev={this.prev} />
            </div>
          </div>
        </div>
      </div>
    );
  }
}
