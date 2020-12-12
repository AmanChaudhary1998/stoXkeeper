import React from "react";
import Typical from 'react-typical';
import './heading.css';

import graphs from "../../../images/graphs.gif";
import coin from "../../../images/coin.png"
import { NavLink } from "react-router-dom";
class Heading extends React.Component {
    render () {
      return (
          <div>
            <div>
            <p class="typical"><Typical
          steps={['Stocks analysis 📈', 800, 'Latest news 📰', 800,'Prediction🔮',800]}
          loop={Infinity}
          wrapper="p"
        /></p>
              {/* <div class="logo"><img  class="coin"src={coin} alt="coin" srcset=""/><h1 class="brand">StoXkeeper</h1></div>  */}
              <img class="graph"src={graphs} alt="" srcset=""/>
              <h1 class="name">StoXkeeper</h1>
              <h3 className="tagline">The X factor in your Trade</h3>
              <div> 
                <NavLink  to="/cardbse" class="explore">Start Today!!</NavLink>
              </div>
            </div>
            {/* <Typo /> */}
          </div>
      )
      }
      }
  
  export default Heading;