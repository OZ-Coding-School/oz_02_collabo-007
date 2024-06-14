import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { InputHTMLAttributes } from 'react';

export const InputVariants = cva(
  `w-full flex border-[1px] border-gray-30 box-border rounded-[8px] transition-all outline-none enabled placeholder:text-gray-50 hover:bg-gray-10 active:border-black active:bg-gray-10 disabled:border-gray-50 disabled:bg-white disabled:cursor-not-allowed`,
  {
    variants: {
      variant: {
        default: '',
        success: ' border-success-60',
        error: ' border-error-60',
        warning: ' border-warning-60',
        display:
          ' border-[1px] border-gray-20 bg-gray-20 text-gray-60 hover:bg-gray-20 active:bg-gray-20',
      },
      inputSize: {
        md: 'px-[12px] py-[10px] text-body-1',
        lg: 'p-[12px] text-[16px] text-body-1',
        mdWith: 'pl-[12px] pr-[44px] py-[10px] text-body-1',
        lgWith: 'pl-[12px] pr-[48px] py-[12px] text-body-1',
      },
    },
    compoundVariants: [
      { variant: 'default', className: ' focus:border-[1px] focus:border-black' },
    ],
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  },
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {}

const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ variant, inputSize, className, ...props }, ref) => {
    return (
      <input
        className={cn(InputVariants({ variant, inputSize }), className)}
        id={props.name}
        name={props.name}
        ref={ref}
        {...props}
      />
    );
  },
);

Input.displayName = 'Input';

export default Input;
