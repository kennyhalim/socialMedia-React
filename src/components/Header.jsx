import React from "react";

function Header(){
  var padding = {
    padding: '20'
  }
  var buttonStyle = {
    padding: '10',
    backgroundColor: 'white',
    fontSize: '16px'
  }
  return (
    <div style={padding}>
      <button style={buttonStyle}>Home</button>
      <button style={buttonStyle}>Notifications</button>
      <button style={buttonStyle}>Messages</button>
    </div> 
  );
}

export default Header;
