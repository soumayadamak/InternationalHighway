import React from 'react'; 
import Subtitle from './Subtitle'; 
import "./styles/Break.css";

export default function Break(prop){
    return(
        <div className="break"> 
        <Subtitle text = {prop.text}/> 
        <hr/>
        </div>); 

}