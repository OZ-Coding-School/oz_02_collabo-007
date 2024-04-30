import React from 'react';

interface LabelProps {
  disabled: boolean;
  label: string;
}

const Label = ({ disabled, label }: LabelProps) => {
  return <label className={`${disabled ? 'text-gray-50' : ''}`}>{label && label}</label>;
};

export default Label;
