import {  Switch } from 'antd';
import { Route, BrowserRouter as Router } from 'react-router-dom';
import './App.css';

import Card from './components/cards/card';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/Card" component={Card}/>
      </Switch>
      </Router>
    </div>
  );
}

export default App;
