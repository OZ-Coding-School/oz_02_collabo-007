import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes } from 'react';

export const ButtonVariants = cva(
  `w-full h-full flex justify-center items-center self-stretch gap-[8px] rounded-lg outline-none font-pretend disabled:cursor-not-allowed disabled:opacity-50 box-border`,
  {
    variants: {
      variant: {
        primary: ` bg-primary-60 text-white enabled:hover:bg-primary-70 enabled:active:bg-primary-80`,
        secondary: ` bg-primary-10 text-primary-60 enabled:hover:bg-primary-20 enabled:active:bg-primary-30`,
        tertiary: ` bg-white border border-primary-30 text-primary-60 enabled:hover:bg-primary-10 enabled:active:bg-primary-20`,
        ghost: ` bg-white text-primary-60 enabled:hover:text-primary-70 enabled:active:text-primary-80`,
      },
      size: {
        sm: 'px-[12px] py-[12px] text-[12px] font-[500] leading-[16px]',
        md: 'px-[16px] py-[10px] text-[14px] font-[500] leading-[20px]',
        lg: 'px-[16px] py-[12px] text-[16px] font-[500] leading-[24px]',
      },
      colors: {
        default: '',
        gray: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        colors: 'gray',
        className: 'bg-gray-100 enabled:hover:bg-gray-90 enabled:active:bg-gray-80',
      },
      {
        variant: 'secondary',
        colors: 'gray',
        className:
          'bg-gray-20 text-gray-80 enabled:hover:bg-gray-30 enabled:active:bg-gray-40',
      },
      {
        variant: 'tertiary',
        colors: 'gray',
        className:
          'border-gray-30 text-gray-80 enabled:hover:bg-gray-10 enabled:active:bg-gray-20',
      },
      {
        variant: 'ghost',
        colors: 'gray',
        className: 'text-gray-80 enabled:hover:text-gray-90 enabled:active:text-gray-100',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      size: 'lg',
      colors: 'default',
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  icon?: React.ReactNode;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ label, icon, variant, colors, size, className, ...props }, ref) => {
    return (
      <button
        ref={ref}
        className={cn(ButtonVariants({ variant, colors, size, className }))}
        {...props}
      >
        {icon && icon}
        {label}
      </button>
    );
  },
);
Button.displayName = 'Button';

export default Button;
