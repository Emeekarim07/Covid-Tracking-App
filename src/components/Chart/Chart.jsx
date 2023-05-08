import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';

import { Bar } from 'react-chartjs-2';
ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);
const options = {
  indexAxis: 'x',
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  plugins: {
    legend: {
      position: 'right',
    },
    title: {
      display: true,
      text: 'Covid-19 Flow Chart',
    },
  },
};

const Chart = (props) => {
  let covidData = props.data;
  console.log(covidData);
  const data = {
    labels: [ 'Total Cases', 'Total Recoverd', 'Total Deaths'],
    datasets: [
      {
        // .replaceAll(",","")
        label: 'Stats',
        data: [ +(covidData.active.replaceAll(",","")), +(covidData.recovered.replaceAll(",","")), +(covidData.deaths.replaceAll(",",""))],
        borderColor: 'rgb(255, 99, 132)',
        backgroundColor: [
          'rgba(0, 0, 255, 0.5)',
          'rgba(0, 255, 0, 0.5)',
          'rgba(255, 0, 0, 0.5)'
        ]
      }
    ],
  };


  return (
    <div style={{ width: '50%',  }} className='bar-chart'>
      {
        console.log("data", data)
      }
      <Bar data={data} options={options} />
    </div>)
}
export default Chart;