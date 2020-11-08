import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import CardBSE from './components/cards/CardBSE';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/CardBSE" component={CardBSE}/>
      </Switch>
      
      </Router>
    </div>
  );
}

export default App;
