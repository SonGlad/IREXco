import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
import { StyledChart } from './Charts.styled';


ChartJS.register(ArcElement, Tooltip, Legend);


export const Chart = ({value, siteLanguage}) => {
  const { stack } = siteLanguage;
  const otherSize = 100 - value.value;

  const data = {
    datasets: [
      {
        data: [value.value, otherSize],
        backgroundColor: ['#cc3900', 'transparent'],
        borderWidth: 0,
        borderRadius: value.value === 0 ? 0 : 6,
      },
    ],
  };

  const options = {
    cutout: '80%',
    hover: { mode: null },
    plugins: {
      legend: {
        display: false,
      },
      tooltip: {
        enabled: false,
      },
    },
  };

  return (
    <StyledChart>
      <p className='chart-title'>{stack.projectTime}</p>
      <div className='chart-wrapper'>
        <Doughnut data={data} options={options}/>
          <div>
            <p>{value.value}</p>
            <span>%</span>
          </div>
      </div>
    </StyledChart>
  );
};