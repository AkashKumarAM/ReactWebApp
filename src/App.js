import React from 'react';
import HomePage from './pages/homepage/home-page';
import './App.css'
import { Switch, Route } from 'react-router-dom';


const HatsPage = () => (
  <div>
    <h1>Hats page</h1>
  </div>
)

function App() {
  return (
    <div>
      <Switch>
        <Route exact path='/' component={HomePage}/>
        <Route exact path='/hats' component={HatsPage}/>  
      </Switch>
    </div>
  );
}

export default App;
