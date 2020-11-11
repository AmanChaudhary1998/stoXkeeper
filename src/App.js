import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import { ReactComponent as CaretIcon } from '../src/components/navbar/icons/caret.svg';

import CardBSE from './components/cards/CardBSE';
import DropdownMenu from './components/navbar/dropdown-menu';
import Navbar from './components/navbar/navbar';
import NavItem from './components/navbar/navbar-items';
import News from './components/news/news';

function App() {
  return (
    <>
        <Router>
          <Navbar>
          <Switch>
          <Route exact path="/cardbse" component={CardBSE} />
          <Route exact path="/news" component={News} />
        </Switch>
      {/* <NavItem  /> */}
      <NavItem icon={< CaretIcon />}>
        <DropdownMenu />

      </NavItem>
    </Navbar>
    </Router>
    </>
  );
}

export default App;
