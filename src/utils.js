export const validateNumbers = (value) => /^(?!,$)[\d,.]+$/.test(value);

const colors = {
  bar: 'red',
  line: 'green',
  pie: [
    '#0B4FBA',
    '#8EEDE6',
    '#CDABF9',
    '#A90051',
    '#F24979',
    '#008A45',
    '#99C1FF',
    '#3382FF',
    '#A8F4CE',
    '#FFBDA0',
    '#CF4112',
    '#1FCC75',
    '#9B57F2',
    '#00E1D4',
    '#FF7337',
    '#04757C',
    '#FEB0C6',
    '#CED5E0',
    '#8E95A7',
    '#3B4355',
  ]
};

export const getDatasets = (data, type) => ([
  {
    type,
    label: 'Chart for test task',
    borderColor: 'rgb(255, 99, 132)',
    backgroundColor: colors[type],
    borderWidth: 2,
    data,
  },
]);
