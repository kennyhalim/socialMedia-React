import React from "react";
import Header from "./Header";
import HeaderTwo from "./HeaderTwo";
import LeftBody from "./leftBody";
import MiddleBody from "./MiddleBody";
import RightBody from "./MiddleBody";

function App(){
  var styling = {
    display: 'grid',
    gridTemplateColumns: '50% 50%'
  }

  var leftBar = {
    marginLeft: '30px'
  }

  var rightBar = {
    position: 'absolute',
    right: 0,
    marginRight: '50px'
  }

  var Body = {
    font: 'Montserrat'
  }

  var content = {
    display: 'grid',
    gridTemplateColumns: '30% 40% 30%'
  }

  var contentRight = {
    position: 'absolute',
    right: 0,
    marginRight: '10px'
  }

  return (
    <div style={Body}>
      <div style={styling}>
        <div style={leftBar}>
          <Header/>
        </div>
        <div style={rightBar}>
          <HeaderTwo/>
        </div> 
      </div>
      <hr/>
      <div style={content}>
        <LeftBody/>
        <MiddleBody/>
        <div style={contentRight}>
          <RightBody/>
        </div>
      </div>
        
    </div>
  );
}

export default App;
