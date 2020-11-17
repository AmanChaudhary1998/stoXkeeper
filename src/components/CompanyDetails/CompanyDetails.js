import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import { CODE } from './companyCode.enum';

const CompanyDetails = (props) => (
    <React.Fragment>
        <CompanyDashboard companyName={CODE[props.location.companyName]} />
        <CompanyChart companyName={CODE[props.location.companyName]} />
    </React.Fragment>
);

export default CompanyDetails;