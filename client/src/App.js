import React from 'react';

import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Career from './career';
import Home from './home';

const App = () =>{
  return ( 
  

    <Router>
      <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/career" component={Career} />
      </Switch>  
    </Router>

  )
};

export default App;