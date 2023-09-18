import { useEffect, useRef, useState } from 'react';
import Chart from 'chart.js/auto';

const BarChart = () => {
  const chartRef = useRef(null);
  const chartInstance = useRef(null);
  const [selectedBar, setSelectedBar] = useState(null);

  useEffect(() => {
    const ctx = chartRef.current.getContext('2d');

    const data = {
      labels: ['A', 'B', 'C', 'D', 'E'],
      datasets: [
        {
          data: [10, 20, 15, 25, 30],
          backgroundColor: ['rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)', 'rgba(0, 0, 0, 0.2)'],
        },
      ],
    };

    const options = {
      onClick: (event, elements) => {
        if (elements.length > 0) {
          const index = elements[0].index;

          if (selectedBar !== null) {
            data.datasets[0].backgroundColor[selectedBar] = 'rgba(0, 0, 0, 0.2)';
          }

          data.datasets[0].backgroundColor[index] = 'rgba(0, 0, 0, 1)';
          setSelectedBar(index);

          if (chartInstance.current) {
            chartInstance.current.data.datasets[0].backgroundColor = data.datasets[0].backgroundColor.slice();
            chartInstance.current.update();
          }
        }
      },
    };

    chartInstance.current = new Chart(ctx, {
      type: 'bar',
      data: data,
      options: options,
    });

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [selectedBar]);

  return (
    <div>
      <canvas ref={chartRef} width={400} height={400}></canvas>
    </div>
  );
};

export default BarChart;
