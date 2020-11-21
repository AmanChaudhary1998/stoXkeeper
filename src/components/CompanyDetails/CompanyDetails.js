import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import TechnicalMeter from './TechnicalMeter/TechnicalMeter';
import MarketSentiment from './MarketSentiment/MarketSentiment';
import { CODE, DESCRIPTION} from './companyCode.enum';
import './CompanyDetails.css';

const CompanyDetails = (props) => (
    <div>
        <CompanyDashboard companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']} companyDescription = {DESCRIPTION[props.location.description]} />
        <CompanyChart companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']}/>
        <div className="analysis">
            <div className="meter inactiveLink ">
                <TechnicalMeter code={CODE[props.match.params.companyName]['tradingView']} />
            </div>
            <div className="pie">
                <MarketSentiment />
            </div>
        </div>
    </div>
);

export default CompanyDetails;