import { useMemo, useReducer } from 'react';

const reducer = (state, action) => {
  switch (action.type) {
    case 'xAxisChange':
      return {
        ...state,
        xAxisInput: action.value,
      };
    case 'yAxisChange':
      return {
        ...state,
        yAxisInput: action.value,
      };
    case 'chartShapeChange':
      return {
        ...state,
        chartShape: action.value,
      };

    default:
      return state;
  }
};

const initialState = {
  xAxisInput: '',
  yAxisInput: '',
  chartShape: 'bar',
};

export const useChartControls = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const chartControls = useMemo(() => ({
    ...state,
    labels: state.xAxisInput.split(','),
    data: state.yAxisInput.split(','),
  }), [state]);

  return [chartControls, dispatch];
};
