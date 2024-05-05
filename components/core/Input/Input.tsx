import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes } from 'react';

export const InputVariants = cva(
  `w-full flex border-[1px] border-gray-30 rounded-[8px] transition-all outline-none enabled placeholder:text-gray-50 hover:bg-gray-10 active:border-black active:bg-gray-10 focus:border-[2px] focus:border-black disabled:border-gray-50 disabled:bg-white disabled:cursor-not-allowed`,
  {
    variants: {
      variant: {
        default: '',
        success: ' border-success-60',
        error: ' border-error-60',
        warning: ' border-warning-60',
        display:
          ' border-0 bg-gray-20 text-gray-60 border-none hover:bg-gray-20 active:bg-gray-20',
      },
      inputSize: {
        md: 'px-[12px] py-[10px] text-body-2',
        lg: 'p-[12px] text-[16px] text-body-1',
        mdWith: 'pl-[12px] pr-[44px] py-[10px] text-body-2',
        lgWith: 'pl-[12px] pr-[48px] py-[12px] text-body-1',
      },
    },
    defaultVariants: {
      variant: 'default',
      inputSize: 'md',
    },
  },
);

interface InputProps
  extends InputHTMLAttributes<HTMLInputElement>,
    VariantProps<typeof InputVariants> {
  inputRef?: React.Ref<HTMLInputElement>;
  className?: string;
}

const Input: FC<InputProps> = ({ variant, inputSize, inputRef, className, ...props }) => {
  return (
    <input
      className={cn(InputVariants({ variant, inputSize }), className)}
      id={props.name}
      name={props.name}
      ref={inputRef}
      {...props}
    />
  );
};

export default Input;
