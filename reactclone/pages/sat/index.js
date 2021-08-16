//our-domain.com/sat
//dom't use a <a> tag to link pages because it sends a request to the server and gets a new html : not a single page application 
import {Fragment} from 'react';
import Link from'next/link';

function satPage(){

    return <Fragment>
             <h1> the home page</h1>
             <ul>
                 {/* renders <a> tag but still a single page application  */}
                 <li> <Link href = "/">Next </Link></li> 
                 <li>something</li>
            </ul>
          </Fragment> 

}

export default satPage;