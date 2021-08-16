import Header from "./Header";
import Newsletter from "./Newsletter";

export default function Layout({ children }) {

        return <div>
            <Header/>
              <div>{children}
              <Newsletter />
            </div>
        </div>
  }