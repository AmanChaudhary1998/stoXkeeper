import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import { CODE } from './companyCode.enum';

const CompanyDetails = (props) => (
    <React.Fragment>
        <CompanyDashboard companyName={this.props.companyname} />
        <CompanyChart companyName={this.props.companyname} />
    </React.Fragment>
);

export default CompanyDetails;