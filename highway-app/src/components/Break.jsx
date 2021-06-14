import React from 'react'; 
import Subtitle from './Subtitle'; 

export default function Break(prop){
    return(
        <div class="break"> 
        <Subtitle text = {prop.text}/> 
        <hr/>
        </div>); 

}