import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter as  Router,Switch,Route } from 'react-router-dom';
import bubble from './components/Bubble'
import quick from './components/Quick'
import insertion from './components/Insertion'
import merge from './components/Merge'

function App() {
  return (
    <div className="App">    
    <Router>
      <Switch>        
        <Route path="/" exact component={bubble}/>      
        <Route path="/bubble" component={bubble}/>      
        <Route path="/quick" component={quick}/>      
        <Route path="/insertion" component={insertion}/>      
        <Route path="/merge" component={merge}/>      
      </Switch>  
    </Router>    
    </div>
  );
}

export default App;
