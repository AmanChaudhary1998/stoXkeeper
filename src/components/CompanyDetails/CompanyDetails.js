import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';

const CompanyDetails = () => (
    <React.Fragment>
        <CompanyDashboard />
        <CompanyChart />
    </React.Fragment>
);

export default CompanyDetails;