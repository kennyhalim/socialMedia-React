import React from "react";

function HeaderTwo(){
var padding = {
    padding: '25'
    }
var inputStyle = {
    padding: '5',
    borderRadius: '20',
    borderStyle: 'solid',
    borderColor: '#00acee',
    borderWidth: '2px',
    fontSize: '16px'
}
var buttonStyle = {
    borderRadius: '20',
    borderStyle: 'solid',
    borderWidth: '2px',
    borderColor: '#00acee',
    fontSize: '16px',
    textAlign: 'center',
    padding: '5',
    width: '60px',
    marginLeft: '20px'
    
}
  return (
      <div style={padding}>
          <input style={inputStyle} placeholder="Search"></input>
          <button style={buttonStyle}>Tweet</button>
      </div>
  );
}

export default HeaderTwo;
