import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export const LabelVariants = cva(
  `
    text-gray-80`,
  {
    variants: {
      variant: {
        default: '',
        disabled: ' text-gray-30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface LabelProps
  extends LabelHTMLAttributes<HTMLLabelElement>,
    VariantProps<typeof LabelVariants> {
  variant?: 'default' | 'disabled' | undefined;
  labelColor?: 'default' | 'disabled';
  label?: string;
}

export const InputLabel: FC<LabelProps> = ({ variant, label, labelColor, ...props }) => {
  return (
    <label className={cn(LabelVariants({ variant: labelColor }))} {...props}>
      {label && label}
    </label>
  );
};
