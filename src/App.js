import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import { ReactComponent as CaretIcon } from '../src/components/navbar/icons/caret.svg';

import CardBSE from './components/cards/CardBSE';
import DropdownMenu from './components/navbar/dropdown-menu';
import Navbar from './components/navbar/navbar';
import NavItem from './components/navbar/navbar-items';
import News from './components/news/news';
import CompanyDetails from './components/CompanyDetails/CompanyDetails';

function App() {
  return (
    <>
        <Router>
          <Navbar>
            <NavItem icon={< CaretIcon />}>
              <DropdownMenu />
            </NavItem>
          </Navbar>
          <div>
            <Switch>
              <Route exact path="/cardbse" component={CardBSE} />
              <Route exact path="/news" component={News} />
              <Route exact path="/companydetails" component={CompanyDetails} />
            </Switch>
          </div>
        </Router>
    </>
  );
}

export default App;
