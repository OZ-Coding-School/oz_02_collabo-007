import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export const LabelVariants = cva({
  variants: {
    variant: {
      default: ' text-gray-60',
      disabled: ' text-gray-30',
    },
  },
});

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof LabelVariants> {
  labelColor?: 'default' | 'disabled';
  label?: string;
}

export const InputLabel: FC<LabelProps> = ({ label, labelColor, ...props }) => {
  return <label className={labelColor}>{label && label}</label>;
};
