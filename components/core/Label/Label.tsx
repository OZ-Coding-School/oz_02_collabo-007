import React from 'react';

interface LabelProps {
  disabled: boolean;
  label: string;
}

const Label = ({ disabled, label }: LabelProps) => {
  return label ? (
    <label className={`${disabled ? 'text-gray-50' : ''}`}>{label && label}</label>
  ) : null;
};

export default Label;
