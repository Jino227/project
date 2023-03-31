import Home from "./components/Topbar/Pages/Home/Home";
import Single from "./components/Topbar/Pages/Home/Single/Single";
import Settings from "./components/Topbar/Pages/Home/Settings/Settings";
import Login from "./components/Topbar/Pages/Home/Login/Login";
import Register from "./components/Topbar/Pages/Home/Login/Register/Register";
import Write from "./components/Topbar/Pages/Home/Write/Write";
import { BrowserRouter as Router,Switch,Route,Link } from "react-router-dom";
import Topbar from "./components/Topbar/Topbar";




function App() {
  
  return (
<div>
<Router>
<Topbar/>
<Switch>
  <Route exact path="/">
    <Home/>
  </Route>
  <Route  path="/register">
    <Register/>
  </Route>
  <Route  path="/login">
     <Login/> 
  </Route>
  <Route  path="/write">
     <Write/>
  </Route>
  <Route  path="/settings">
    <Settings/>
  </Route>
  <Route  path="/post/:postid">
    <Single/>
  </Route>
</Switch>
</Router>
        
       
</div>
      
       
        
        
        
       
       
          
        
       
    
     
    
  );
}

export default App;
