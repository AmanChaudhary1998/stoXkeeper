import React from 'react';
import axios from 'axios';
const MonkeyLearn = require('monkeylearn');

class SentimentModel extends React.Component{

    handleSentimentRequest = async () => {

        const response = await axios({
            method:'GET',
            url: 'https://api.twitter.com/2/tweets/search/recent?query=RelianceIndustries&max_results=50',
            headers: {
                Authorization: 'OAuth oauth_consumer_key="NV5MQ1CzL8MA8rwCeG5AULbhs",oauth_token="1330089570617208832-kbeyQHSkSZdmXJvZZyq3cNNsEu5Z2j",oauth_signature_method="HMAC-SHA1",oauth_timestamp="1,515677408",oauth_nonce="nonce",oauth_version="1,.0",oauth_signature="signature"',
            },
        });

        const data = response['data'];
        const tweets = [];
        data.forEach(element => {
            tweets.push(element['text']);
        });

        const ml = new MonkeyLearn('06e8eaeb70f539b218445d703542e4c058f5a8da')
        let model_id = 'cl_pi3C7JiL'
        ml.classifiers.classify(model_id, tweets).then(res => {
            return res.body;
        });
    }

    componentDidMount() {
        this.handleSentimentRequest();
    }

    render(){
        return(
            <div>
            </div>
        )
    }
}

export default SentimentModel;