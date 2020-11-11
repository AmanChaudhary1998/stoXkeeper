import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import CardBSE from './components/cards/CardBSE';
import Navbar from './components/navbar/navbar';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import ApexChart from './components/Chart/CompanyDetails';
import Test from './components/test';

function App() {
  return (
      <Router>
      <Navbar />
      <Switch>
        <Route exact path="/CardBSE" component={ApexChart}/>
      </Switch>
      
      </Router>
  );
}

export default App;
