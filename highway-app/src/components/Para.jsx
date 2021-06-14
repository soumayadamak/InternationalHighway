import React from "react"; 
import './styles/Para.css';

export default function Para(prop){
   return (<p className="para">{prop.text}</p>);
}