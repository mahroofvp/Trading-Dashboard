import React from 'react';
import { Doughnut } from 'react-chartjs-2';
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';

// Register Chart.js components
ChartJS.register(ArcElement, Tooltip, Legend);

const SemiDoughnutChart = ({winners, breakeven, losers, circleDeg, size}) => {
  const data = {
    labels: ['Group A', 'Group B'],
    datasets: [
      {
        data: [winners,breakeven,losers], // Values for the chart
        backgroundColor: ["#07ba6a","#19147a" ,"#f5426f"], // Segment colors
        borderWidth: 0, // Remove border
      },
    ],
  };

  const options = {
    responsive: true,
    cutout: '82%', // Creates the doughnut effect width
    rotation: -90, // Starts from the top (half-circle rotation)
    circumference: circleDeg, // Ends at the bottom (half-circle chart)
    plugins: {
      legend: {
        display: false, // Hide the legend (dots)
      },
      tooltip: {
        enabled: false, // Disable tooltips
      },
    },
    animation: {
      duration: 0, // Disable animation
    },
  };

  return (
    <div style={{ width:size, margin: '0 auto' }}>
      <Doughnut data={data} options={options} />
    </div>
  );
};

export default SemiDoughnutChart;
