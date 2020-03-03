import React, { Fragment } from 'react';
import { Line } from 'react-chartjs-2';

const data = {
  labels: ['January', 'February', 'March', 'April', 'May', 'June', 'July'],
  datasets: [
    {
      label: 'My First dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(75,192,192,0.4)',
      borderColor: 'rgba(75,192,192,1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(75,192,192,1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(75,192,192,1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [50, 59, 62, 58, 60, 63, 70]
    },
    {
      label: 'My second dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(228, 151, 58, 1)',
      borderColor: 'rgba(228, 151, 58, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(228, 151, 58, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(228, 151, 58, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [45, 50, 55, 56, 58, 63, 75]
    },
    {
      label: 'My third dataset',
      fill: false,
      lineTension: 0.1,
      backgroundColor: 'rgba(69, 46, 17, 1)',
      borderColor: 'rgba(69, 46, 17, 1)',
      borderCapStyle: 'butt',
      borderDash: [],
      borderDashOffset: 0.0,
      borderJoinStyle: 'miter',
      pointBorderColor: 'rgba(69, 46, 17, 1)',
      pointBackgroundColor: '#fff',
      pointBorderWidth: 1,
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(69, 46, 17, 1)',
      pointHoverBorderColor: 'rgba(220,220,220,1)',
      pointHoverBorderWidth: 2,
      pointRadius: 1,
      pointHitRadius: 10,
      data: [43, 45, 50, 53, 60, 63, 75]
    }
  ]
};

const LineChart = () => {
  return (
    <Fragment>
      <div style={{ height:'100%'}}>
        <h2>Sales Revenue Pipeline + sow</h2>
        <div style={{ height: '100%', width: '500px' }}>
          <h1>Sales</h1>
          <Line data={data} />
        </div>
        <div style={{ height: '100%', width: '500px' }}>
          <h1>Revenue</h1>
          <Line data={data} />
        </div>
      </div>
    </Fragment>

  );
}

export default LineChart;