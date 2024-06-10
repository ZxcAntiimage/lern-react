import React from 'react';
import Header from './components/Header';

class App extends React.Component{
  text = "Hello world";
  render(){
    return(
      <>
     <Header title="Шапочка сайта"/>
      
      <div className="name">
        <h1>{this.text}</h1>
        <input placeholder='Hi' onClick={this.inputMouse} onMouseEnter={this.mouseOver} />
        <p>{this.text === "Hello World" ? "Hi" : "Good bye"}</p>
  
      </div>
   
      </>
    )
  }

  inputClick = () => {console.log("Input Clicked")}
  mouseOver = () => {console.log("Mouse Over")}
}


export default App;