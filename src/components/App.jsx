import React from "react";
import emojipedia from "../emojipedia" ; 
import Card from "./Card"; 

function creatCard(emojipedia){
  return(

    <Card
    key ={emojipedia.id}
    name={emojipedia.name}
    img ={emojipedia.emoji}
    meaning ={emojipedia.meaning}
    />
  );
  
}

function App(){

  return (
    <div> 
      <h1><span> emojipedia</span> </h1>
       {emojipedia.map(creatCard)}
    </div> 
  );
}


export default App;