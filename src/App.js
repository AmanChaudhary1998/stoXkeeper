import { Card, Switch } from 'antd';
import { Route } from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar/navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path="/Card" component={Card}/>
      </Switch>
    </div>
  );
}

export default App;
