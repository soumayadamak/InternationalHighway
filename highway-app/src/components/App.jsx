import React from "react"; 
import Header from "./Header";
import Home from './Home'; 
import Sat from './Sat';
import Guidance from './guidance';


//the component that combines all smaller components 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home/>
      <div>
      <Sat/>
      </div>
     
    </div>
  );
}

export default App;
