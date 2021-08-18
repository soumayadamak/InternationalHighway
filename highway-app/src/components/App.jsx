import React from "react"; 
import Header from "./Header";
import Home from './Home'; 
import Footer from './Footer'
//the component that combines all smaller components 
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Header />
      </header>
      <Home/>
      <Footer/>
    </div>
  );
}

export default App;
