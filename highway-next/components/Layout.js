import Header from "./Header";
import Head from 'next/head';
import styles from "../styles/Home.module.css";

export default function Layout({ children }) {

        return (
        <div className = {styles.container}>
          <Head>
            <title> International Highway</title>
            <link rel = "icon" href = "/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;1,300&display=swap" rel="stylesheet"/>
          </Head>
          <Header/>
          <main className={styles.main}>
            {children}
          </main>
        </div>
        );
  }