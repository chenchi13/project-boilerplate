import React from 'react';
import { Route, Switch } from 'react-router-dom';
import { Home, NotFound, About, Favorites, Cart } from '../index';

class App extends React.Component {

   
  render() {
    return (
      <div>
        <Switch>
          {
            // Define all your routes here bla
          }
          <Route exact path="/about" component={About} />
          <Route exact path="/favorites" component={Favorites} />
          <Route exact path="/cart" component={Cart} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} /> 
        </Switch>
      </div>
    );
  }
}

export default App;
