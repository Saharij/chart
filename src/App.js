import { useCallback, useMemo, useRef } from 'react';

import Chart from './components/Chart';
import { getDatasets, validateNumbers } from './utils';
import { useChartControls } from './components/Chart/hooks/useChartControls';
import { AxisDataControl, ChartShapeControl } from './components/Chart/ChartControls';

function App() {
  const yAxisRef = useRef();
  const [state, dispatch] = useChartControls();

  const datasets = useMemo(() =>
    getDatasets(state.data, state.chartShape),
  [state.data, state.chartShape]);

  const handleXAxisChange = useCallback((value) => {
    dispatch({ type: 'xAxisChange', value });
  }, []);

  const handleYAxisChange = useCallback((value) => {
    dispatch({ type: 'yAxisChange', value });
  }, []);

  const handleChartShapeChange = useCallback((value) => {
    dispatch({ type: 'chartShapeChange', value });
  }, [])

  const handleXAxisKeyUp = useCallback(({ key }) => {
    if (key === 'Enter') yAxisRef.current.focus();
  }, []);

  return (
    <div className="container py-5">
      <div className="row align-items-end">
        <div className="col-md-8">
          <div className="row">
            <div className="col-md-6">
              <AxisDataControl
                name="axisX"
                value={state.xAxisInput}
                label="X axis labels:"
                className="mb-3"
                onKeyUp={handleXAxisKeyUp}
                onChange={handleXAxisChange}
              />
            </div>
            <div className="col-md-6">
              <AxisDataControl
                ref={yAxisRef}
                name="axisY"
                value={state.yAxisInput}
                label="Y axis values:"
                className="mb-3"
                validateValue={validateNumbers}
                onChange={handleYAxisChange}
              />
            </div>
          </div>
        </div>
        <div className="col-md-4">
          <ChartShapeControl
            value={state.chartShape}
            className="d-flex justify-content-end mb-3"
            onChange={handleChartShapeChange}
          />
        </div>
      </div>
      <div className="row mt-3">
        <div className="col">
          <Chart
            labels={state.labels}
            datasets={datasets}
            type={state.chartShape}
          />
        </div>
      </div>
    </div>
  );
};

export default App;
