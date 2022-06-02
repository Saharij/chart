import { useMemo } from 'react';
import T from 'prop-types';
import {
  Chart as ChartJS,
  // ArcElement,
  // LinearScale,
  // CategoryScale,
  // BarElement,
  // PointElement,
  // LineElement,
  // Legend,
  // Tooltip,
  registerables,
} from 'chart.js';
import { Chart as ReactChart } from 'react-chartjs-2';

ChartJS.register(
  ...registerables,
);

const Chart = ({
  labels,
  type,
  datasets,
  options,
}) => {
  const params = useMemo(() => ({
    responsive: true,
    ...options,
  }), [options]);

  const data = useMemo(() => ({
    labels,
    datasets,
  }), [labels, datasets])

  return (
    <ReactChart
      type={type}
      data={data}
      options={params}
    />
  );
};

Chart.propTypes = {
  labels: T.array.isRequired,
  type: T.string.isRequired,
  datasets: T.arrayOf(
    T.shape({
      label: T.string,
      borderColor: T.string,
      backgroundColor: T.string,
      borderWidth: T.number,
      data: T.array,
    }),
  ).isRequired,
  options: T.object,
};

export default Chart;
