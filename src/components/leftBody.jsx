import React from "react";

function LeftBody(){
  var box = {
      marginTop: '30px',
      width: '240px',
      height: '90px',
      padding: '10px',
      backgroundColor: '#00acee',
      border: '1px solid gray',
      margin: '0'
  }

  var boxTwo = {
    width: '240px',
    padding: '10px',
    backgroundColor: 'white',
    border: '1px solid gray',
    margin: '0'
}

var boxThree = {
    marginTop: '40px',
    width: '240px',
    padding: '10px',
    backgroundColor: 'white',
    border: '1px solid gray',
    margin: '0'
}

  return (
      <div>
        <div style={box}>
        </div>
        <div style={boxTwo}>
            <h4>Test React</h4>
        </div>
        <div style={boxThree}>
            <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.</p>
        </div>  
    </div>
  );
}

export default LeftBody;
