import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import { CODE } from './companyCode.enum';

const CompanyDetails = (props) => (
    <React.Fragment>
        <CompanyDashboard companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']}/>
        <CompanyChart companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']}/>
    </React.Fragment>
);

export default CompanyDetails;