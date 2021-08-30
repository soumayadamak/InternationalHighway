
import Subtitle from './Subtitle'; 


export default function Break(prop){
    return(
        <div className="break"> 
        <Subtitle text = {prop.text}/> 
        <hr/>
        <style jsx>{`
            hr{
                width: 56px;
                height: 2px;
                background: #000000;
                border-radius: 5px;
                
            }
            .break{
                text-align: center;
                padding-top: 5%;
                margin: auto;
            }

      `}</style>
        </div>); 

}