import React from 'react';

interface LabelProps {
  disabled?: boolean;
  label: string;
  name?: string;
}

const Label = ({ disabled, label, name }: LabelProps) => {
  return label ? (
    <label
      htmlFor={name}
      className={`${disabled ? 'text-gray-50' : ''} text-sub-headline-2`}
    >
      {label && label}
    </label>
  ) : null;
};

export default Label;
