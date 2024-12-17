import React from 'react';

function CheckboxGroup({ label, name, options, selectedValues, onChange }) {
  const handleCheckboxChange = (e) => {
    const { value, checked } = e.target;
    // Update selectedValues array
    if (checked) {
      onChange([...selectedValues, value]);
    } else {
      onChange(selectedValues.filter((item) => item !== value));
    }
  };

  return (
    <div>
      <label>{label}</label>
      <div className="checkbox-group">
        {options.map((option) => (
          <div key={option.id} className="checkbox-item">
            <input
              type="checkbox"
              id={option.id}
              name={name}
              value={option.id}
              checked={selectedValues.includes(option.id)}
              onChange={handleCheckboxChange}
            />
            <label htmlFor={option.id}>{option.label}</label>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CheckboxGroup;