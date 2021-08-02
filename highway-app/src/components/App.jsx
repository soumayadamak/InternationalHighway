import React from "react"; 
import Header from "./Header";
import Home from './Home'; 
import Newsletter from "./Newsletter";

//the component that combines all smaller components 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      {/* <Home/> */}
      <Newsletter/>
    </div>
  );
}

export default App;
