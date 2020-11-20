import React from 'react';
import CompanyChart from './Chart/CompanyChart';
import CompanyDashboard from './CompanyDashboard/CompanyDashboard';
import { CODE, DESCRIPTION} from './companyCode.enum';

const CompanyDetails = (props) => (
    <React.Fragment>
        <CompanyDashboard companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']} companyDescription = {DESCRIPTION[props.location.description]} />
        <CompanyChart companyCode={CODE[props.match.params.companyName]['code']} companyName={CODE[props.match.params.companyName]['name']}/>
    </React.Fragment>
);

export default CompanyDetails;