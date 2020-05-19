import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import About from "./pages/about";
// import Portfolio from "./pages/portfolio";
// import Contact from "./pages/contact";
// import Navtab from "./components/Navtab";


function App() {
  return (
 
 <div> 
   <Router>
    <div>
      {/* <Navtab /> */}
      {/* removed duplicate render */}
      {/* <Route exact path="/" component={About} />  */}
    </div>
  </Router>
   
<About />
    
    </div>
  );
}

export default App;