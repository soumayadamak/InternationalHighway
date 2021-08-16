
export default function Subtitle(prop){
return(
<div className = "firstTitle">
    <h4 className = "subheading">{prop.text} </h4>
    <style jsx>{`
        .firstTitle{
            padding-left: 10%;

            font-family: 'Mulish', sans-serif;
            font-style: normal;
            font-weight: 900;
            font-size: 21px;
            line-height: 32px;

            color: #000000;
            mix-blend-mode: normal;
            display: inline-block;
            height: 100%;
            width: 100%;
        }

      `}</style>
</div>);}