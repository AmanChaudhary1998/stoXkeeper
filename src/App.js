// import {  Switch } from 'antd';
import { Route, BrowserRouter as Router, withRouter, Switch } from 'react-router-dom';

import './App.css';
import Navbar from './components/navbar/navbar';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';
import ApexChart from './components/Chart/CompanyDetails';
import Test from './components/test';

function App() {
  return (
      <Router>
      <Navbar />
      {/* <Test/> */}
        <Switch>
          <Route exact path="/companyDetails" component={CompanyDetails} />
          <Route exact path="/companyChart" component={ApexChart} />
        </Switch>
      </Router>
  );
}

export default App;
