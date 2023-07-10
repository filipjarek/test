import React from 'react';
import { Chart as ChartJS, ArcElement, Tooltip } from 'chart.js';
import ChartDataLabels from 'chartjs-plugin-datalabels';
import { Pie } from 'react-chartjs-2';

ChartJS.register(ArcElement, Tooltip, ChartDataLabels);

interface Channel {
  channel_name: string;
  clients_amount: number;
  channel_color: string;
}

interface ChartViewerProps {
  channels?: Channel[];
}

const ChartViewer: React.FC<ChartViewerProps> = ({ channels }) => {
  const suma = channels
    ? channels.reduce((total, channel) => total + channel.clients_amount, 0)
    : 0;
  const chartLabels = channels?.map((channel) => channel.channel_name);
  const chartData = channels?.map(
    (channel) => ((channel.clients_amount * 100) / suma).toFixed(2)
  );
  const colors = channels?.map((channel) => channel.channel_color);

  const chartDataset = {
    labels: chartLabels,
    datasets: [
      {
        data: chartData,
        backgroundColor: colors,
        hoverBackgroundColor: colors,
      },
    ],
  };

  const options = {
    plugins: {
      datalabels: {
        formatter: (value: any) => {
          return value + '%';
        },
        display: true,
      
        backgroundColor: 'black',
        color: 'white',
        font: { size: 12 },
      },
    },
  };

  return (
    <section className="bg-zinc-800 py-8">
      <div className="container mx-auto">
        <div className="flex justify-center">
          <div className="w-2/3">
            <Pie data={chartDataset} options={options} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ChartViewer;
