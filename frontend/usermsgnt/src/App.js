import React from 'react'
import { Route, Switch } from 'react-router-dom';
import Homepage from './components/Homepage';
import Login from './components/Login';
import Dashboard from './components/Dashboard';
import Logout from './components/Logout';
function App() {
  return (
     <Switch>

     <Route exact path= "/" component={Homepage} /> 
     </Switch> 
  
  );
}

export default App;
