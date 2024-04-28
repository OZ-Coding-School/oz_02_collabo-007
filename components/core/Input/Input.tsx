import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes } from 'react';

export const InputVariants = cva(
  `
    w-[328px] flex justify-center my-[8px] py-[16px] px-[12px] border-[1px] border-gray-30 rounded-[8px] text-[16px] 
     transition-all `,
  {
    variants: {
      variant: {
        default: '',
        hover: ' bg-gray-10',
        pressed: ' border-black bg-gray-10',
        active: ' border-black',
        focus: ' border-[2px] border-black',
        filled: ' text-black',
        success: ' border-success-60',
        error: ' border-error-60',
        warning: ' border-warning-60',
        disabled: ' text-gray-30',
        display: ' border-0 bg-gray-20',
      },
      inputSize: {
        default: '',
        lg: ' h-[56px] ',
        md: ' h-[48px] ',
        sm: ' h-[40px] text-[14px] ',
      },
      helperTextColor: {
        default: ' text-gray-60',
        success: ' text-success-60',
        error: 'text-error-60',
        warning: ' text-warning-60',
        disabled: 'text-gray-30',
      },
      labelColor: {
        default: '',
        disabled: ' text-gray-30',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'default',
    },
  },
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  label?: string;
  labelColor?: string;
  children?: React.ReactElement;
  helperText?: string;
  type: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  variant,
  helperTextColor,
  label,
  labelColor,
  helperText,
  type,
  placeholder,
  children,
  inputSize,
  ...props
}) => {
  return (
    <div>
      <label className={labelColor}>{label && label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(InputVariants({ variant, inputSize }))}
        {...props}
      />
      <p className={cn('font-thin text-xs', { helperTextColor })}>
        {helperText && helperText}
      </p>
    </div>
  );
};

export default Input;
