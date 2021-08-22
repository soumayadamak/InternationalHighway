import Header from "./Header";
import Head from 'next/head';
export default function Layout({ children }) {

        return (
        <div>
          <Head>
            <title> International Highway</title>
            <link rel = "icon" href = "/favicon.ico"/>
            <link href="https://fonts.googleapis.com/css2?family=Mulish:ital,wght@0,200;1,300&display=swap" rel="stylesheet"/>
          </Head>
          <Header/>
          <div>
            {children}
          </div>
        </div>
        );
  }