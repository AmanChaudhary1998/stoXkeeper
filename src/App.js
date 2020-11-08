import { Route, BrowserRouter as Router,Switch } from 'react-router-dom';
import './App.css';

import CardBSE from './components/cards/CardBSE';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Router>
      <Navbar />
      {
        console.log("aman")
      }
        <Route exact path="/CardBSE" render={()=><h1>Hello</h1>}/>
      </Router>
    </div>
  );
}

export default App;
