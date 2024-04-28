import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes } from 'react';

export const InputVariants = cva(
  `
    w-[328px] flex justify-center border-[1px] rounded-[8px] text-[16px] 
     transition-all  `,
  {
    variants: {
      variant: {
        default: 'shadow-none active:scale-100',
        gray: ' bg-gray-50',
        green: ' bg-success-50',
        red: ' bg-primary-50',
      },
      inputSize: {
        default: '',
        lg: ' h-[56px] ',
        md: ' h-[48px] ',
        sm: ' h-[40px] text-[14px] ',
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
  children?: React.ReactElement;
  helperText?: string;
  type: string;
  placeholder: string;
}

const Input: FC<InputProps> = ({
  variant,
  label,
  helperText,
  type,
  placeholder,
  children,
  inputSize,
  ...props
}) => {
  return (
    <div>
      <label>{label && label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={cn(InputVariants({ variant, inputSize }))}
        {...props}
      />
      <p>{helperText && helperText}</p>
    </div>
  );
};

export default Input;
