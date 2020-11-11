import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import CardBSE from './components/cards/CardBSE';
import DropdownMenu from './components/navbar/dropdown-menu';
import Navbar from './components/navbar/navbar';
<<<<<<< HEAD
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
=======
import NavItem from './components/navbar/navbar-items';
import { ReactComponent as CaretIcon } from '../src/components/navbar/icons/caret.svg';

function App() {
  return (
    <>
        <Router>
          <Navbar>
          <Switch>
          <Route exact path="/cardbse" component={CardBSE} />
        </Switch>
      <NavItem  />
      <NavItem icon={< CaretIcon />}>
        <DropdownMenu />

      </NavItem>
    </Navbar>
    </Router>
    </>
>>>>>>> 8c6a3d864d74a8e39065d600ef4b566d2c37f5a8
  );
}

export default App;
