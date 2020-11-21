import React from 'react';
import './meter.css';

class TechnicalMeter extends React.Component{
    constructor(props){
        super(props);
        this._ref = React.createRef();
    }
    componentDidMount() {
        const script = document.createElement('script');
        script.src = 'https://s3.tradingview.com/external-embedding/embed-widget-technical-analysis.js'
        script.async = true;
        script.innerHTML = `
            {
                "interval": "1m",
                "width": 425,
                "isTransparent": true,
                "height": 450,
                "symbol": "BSE:SBIN",
                "showIntervalTabs": true,
                "locale": "in",
                "colorTheme": "dark"
              }`
        this._ref.current.appendChild(script);
    }
    render() {
        return(
            <div class="tradingview-widget-container" ref={this._ref}>
                <div class="tradingview-widget-container__widget"></div> 
            </div>
        )
    }    
}

export default TechnicalMeter;
