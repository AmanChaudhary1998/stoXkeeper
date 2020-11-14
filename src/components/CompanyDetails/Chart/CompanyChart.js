import React, { Component } from "react";
import ReactDOM from 'react-dom';
import Chart from "react-apexcharts";
import axios from 'axios';
import './style.css';

class ApexChart extends React.Component {

  switchTimeSeries = (series, array) => {
    console.log(series);
    this.setState({
      timeSeries: series,
      timeArray: array,
    });  
    this.forceUpdate();
  }
  
  componentDidMount() {
    const IEX = [];
    const API = axios.create({
      baseURL: "https://www.alphavantage.co/query?function=TIME_SERIES_"+this.state.timeSeries+"&symbol=RELIANCE.BSE&apikey=R96R6264N1DFR7E3",
    });
    API.get("/").then(result => {
      var count  = 0;
      console.log(result, this.state.timeArray+' Time Series', );
      for(var i in result.data[this.state.timeArray+' Time Series']){
        count = count + 1;
        // if(count === 10){
        //   break;
        // }
        var temp = {
            date: i,
            close: parseFloat(result.data[this.state.timeArray+' Time Series'][i]['4. close']),
            open: parseFloat(result.data[this.state.timeArray+' Time Series'][i]['1. open']),
        };
        IEX.push({...temp});
    }
    this.setState({
      series:[{
        name: 'XYZ MOTORS',
        data: IEX.map((d) => {
          // console.log('data',d.date, d.open, d.close);
          return {
            x: new Date(d.date),
            y: [d.open, d.open, d.close, d.close],
          }
        })
        // type:'line',
        // data:[1,2,3,4,5,6,7],
      }]
    })
    console.log(this.state.series)
  }
    )}

  constructor(props) {
    super(props);

  this.state = {
      timeSeries: 'WEEKLY',
      timeArray: 'Weekly',
      series: [{
        name: '',
        data: [],
        // type:'line',
        // data:[1,2,3,4,5,6,7],
      }],
      options: {
        chart: {
          type: 'area',
          stacked: false,
          height: 350,
          zoom: {
            type: 'x',
            enabled: true,
            autoScaleYaxis: true
          },
          // toolbar: {
          //   autoSelected: 'zoom'
          // }
        },
        colors: ['#a5f778','#6ef5cc'],
        dataLabels: {
          enabled: false
        },
        markers: {
          size: 0,
        },
        title: {
          text: 'Stock Price Movement',
          align: 'left'
        },
        fill: {
          type: 'gradient',
          gradient: {
            shadeIntensity: 1,
            inverseColors: false,
            opacityFrom: 0.5,
            opacityTo: 0,
            stops: [0, 90, 100]
          },
        },
        yaxis: {
          labels: {
            formatter: function (val) {
              // console.log('y', val);
              // return (val / 1000000).toFixed(0);
              return val;
            },
          },
          title: {
            text: 'Price'
          },
        },
        xaxis: {
          type: 'datetime',
        },
        tooltip: {
          shared: false,
          y: {
            formatter: function (val) {
              return val;
            }
          }
        }
      },
  } }
  render() {
    return (
    <React.Fragment>
      {/* <div className="graphButtons">
        <button className="graphButton" onClick={() => this.switchTimeSeries('MONTHLY', 'Monthly')}>Monthly</button>
        <button className="graphButton" onClick={() => this.switchTimeSeries('YEARLY', 'Yearly')}>Yearly</button>
        <button className="graphButton" onClick={() => this.switchTimeSeries('DAILY', 'Daily')}>Daily</button>
      </div> */}
      <div id="chart" className="CompanyChartContainer">
        <Chart options={this.state.options} series={this.state.series} type="area" height={400} />
      </div>
    </React.Fragment>
    );
  }
}

export default ApexChart;
// ReactDOM.render(
//   ApexChart,
//   document.getElementById('header')
// );