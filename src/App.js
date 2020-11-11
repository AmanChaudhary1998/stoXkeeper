import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import CardBSE from './components/cards/CardBSE';
import DropdownMenu from './components/navbar/dropdown-menu';
import Navbar from './components/navbar/navbar';
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
  );
}

export default App;
