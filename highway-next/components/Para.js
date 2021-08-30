import styles from "../styles/Section.module.css";
export default function Para(prop){
   return (<p className={styles.para}>{prop.text}</p>);
}