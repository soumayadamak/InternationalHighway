//ourdomain.com/
//you can omit the import react from 'react' statement for next js

import styles from '../styles/Home.module.css';
import Head from 'next/head';
function homePage(){

    return  (
            <div>
                <Head>
                    <title> International Highway</title>
                    <link rel = "icon" href = "/favicon.ico"/>
                    <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;1,300&display=swap" rel="stylesheet"/>
                </Head>
            </div>

    );
}

export default homePage;

