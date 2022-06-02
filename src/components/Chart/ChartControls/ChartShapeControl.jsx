import T from 'prop-types';

const options = [
  {
    name: 'bar',
    label: 'Bar Chart',
    icon: 'fa-solid fa-chart-column',
  },
  {
    name: 'line',
    label: 'Line Chart',
    icon: 'fa-solid fa-chart-line',
  },
  {
    name: 'pie',
    label: 'Pie Chart',
    icon: 'fa-solid fa-chart-pie',
  },
];

const ChartShapeControl = ({
  value,
  className,
  onChange,
}) => (
  <div className={className}>
    {options.map(({ name, icon }) => (
      <div className="form-check form-check-inline" key={name}>
        <input
          type="radio"
          name="chart-shape"
          id={`chart-shape-${name}`}
          value={name}
          className="form-check-input"
          checked={value === name}
          onChange={({ target: { value } }) => onChange(value)}
        />
        <label
          className="form-check-label"
          htmlFor={`chart-shape-${name}`}
        >
          <i className={icon} />
        </label>
      </div>
    ))}
  </div>
);

ChartShapeControl.protoTypes = {
  value: T.string.isRequired,
  className: T.string,
  onChange: T.func.isRequired,
};

export default ChartShapeControl;
