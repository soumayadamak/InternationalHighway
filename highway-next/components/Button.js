import styles from "../styles/Button.module.css";
function Button(prop){
    return(
    <button  className = {styles.coloredButt} disabled = {prop.disabled} type = {prop.type} onClick = {prop.onClick}>{prop.text}</button>
    );
}

export default Button; 