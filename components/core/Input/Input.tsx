import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';

export const InputVariants = cva(
  `
    w-[328px] flex justify-center my-[8px] py-[16px] px-[12px] border-[1px] border-gray-30 rounded-[8px] text-[16px] 
     transition-all outline-none enabled placeholder:text-gray-50 hover:bg-gray-10 active:border-black active:bg-gray-10 focus:border-[2px] focus:border-black`,
  {
    variants: {
      variant: {
        default: '',
        success: ' border-success-60',
        error: ' border-error-60',
        warning: ' border-warning-60',
        display: ' border-0 bg-gray-20',
      },
      helperTextColor: {
        default: ' text-gray-60',
        success: ' text-success-60',
        error: 'text-error-60',
        warning: ' text-warning-60',
        disabled: 'text-gray-30',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

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

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  label?: string;
  labelColor?: 'default' | 'disabled';
  children?: React.ReactElement;
  helperText?: string;
  helperTextcolor?: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  variant,
  label,
  labelColor = 'default',
  helperTextColor,
  helperText,
  ...props
}) => {
  return (
    <div>
      <label className={cn(LabelVariants({ variant: labelColor }))}>
        {label && label}
      </label>
      <input className={cn(InputVariants({ variant }))} {...props} />
      <p className={cn('font-thin text-xs', helperTextColor)}>
        {helperText && helperText}
      </p>
    </div>
  );
};

export default Input;
