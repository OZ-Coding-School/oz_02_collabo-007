import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { FC, InputHTMLAttributes, LabelHTMLAttributes } from 'react';
import warning from '@/public/warning-circle.svg';
import error from '@/public/error-circle.svg';
import success from '@/public/success-circle.svg';
import Image from 'next/image';

export const InputVariants = cva(
  `
    w-full flex justify-center my-[8px] py-[16px] px-[12px] border-[1px] border-gray-30 rounded-[8px] text-[16px] 
     transition-all outline-none enabled placeholder:text-gray-50 hover:bg-gray-10 active:border-black active:bg-gray-10 focus:border-[2px] focus:border-black disabled:border-gray-50 disabled:bg-white`,
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
  helperText?: string;
  disabled?: boolean;
  readOnly?: boolean;
}

const circleSvgs = {
  warning: warning,
  error: error,
  success: success,
};

const Input: FC<InputProps> = ({
  variant = 'default',
  label,
  helperText,
  disabled = false,
  readOnly = false,
  ...props
}) => {
  return (
    <div className={`${disabled ? 'opacity-30' : ''}`}>
      <label className={`${disabled ? 'text-gray-50' : ''}`}>{label && label}</label>
      <input
        className={cn(InputVariants({ variant }))}
        {...props}
        disabled={disabled}
        readOnly={readOnly}
      />
      <p className={`flex font-thin text-xs text-${variant}-60`}>
        {variant === 'warning' || variant === 'error' || variant === 'success' ? (
          <Image
            priority
            src={circleSvgs[variant]}
            alt={''}
            width={16}
            height={16}
            className={`mr-[6px]`}
          />
        ) : null}
        {helperText && helperText}
      </p>
    </div>
  );
};

export default Input;
