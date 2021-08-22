//ourdomain.com/
//you can omit the import react from 'react' statement for next js

import styles from '../styles/Newsletter.module.css';

import Newsletter from "../components/Newsletter";

function homePage(){

    return  (
            <div>
                <Newsletter />
            </div>

    );
}

export default homePage;

