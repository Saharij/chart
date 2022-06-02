import T from 'prop-types';
import { forwardRef, useState } from 'react';

const AxisDataControl = forwardRef(
({
  name,
  label,
  className,
  validateValue,
  onKeyUp,
  onChange,
}, ref) => {
  const [value, setValue] = useState('');

  const handleBlur = () => {
    onChange(value);
  };

  const handleKeyUp = (event) => {
    if (event.key === 'Enter') event.target.blur();
    onKeyUp?.(event);
  };

  const handleValueChange = ({ target: { value } }) => {
    if (validateValue) {
      if (!value || validateValue?.(value)) {
        setValue(value);
      }
    } else {
      setValue(value);
    }
  };

  return (
    <div className={className}>
      <label
        htmlFor={name}
        className="form-label"
      >
        {label}
      </label>
      <input
        ref={ref}
        id={name}
        name={name}
        value={value}
        className="form-control"
        onBlur={handleBlur}
        onKeyUp={handleKeyUp}
        onChange={handleValueChange}
      />
    </div>
  )
});

AxisDataControl.propTypes = {
  name: T.string.isRequired,
  label: T.string,
  className: T.string,
  validateValue: T.func,
  onKeyUp: T.func,
  onChange: T.func.isRequired,
};

export default AxisDataControl;
