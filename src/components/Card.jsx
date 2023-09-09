import React from "react" ; 

function Card(Props){
  return (
 
     <di className="dictionary">
       <div className="term"> 
       <dt>
       <span className="emoji" role="img" aria-label="Tense Biceps">{Props.img}</span>
       <span> {Props.name} </span>
        </dt> 
        <dd> 
          {Props.meaning}
        </dd> 
        </div> 
      </di> 
  ); 
}

export default Card; 

