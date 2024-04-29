import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import React, { ButtonHTMLAttributes, FC } from 'react';

export const ButtonVariants = cva(
  `w-full h-full flex justify-center items-center rounded-lg font-[500] text-[16px] leading-[24px] outline-none font-pretendard disabled:cursor-not-allowed disabled:opacity-50`,
  {
    variants: {
      variant: {
        primary: ` bg-primary-60 text-white enabled:hover:bg-primary-70 enabled:active:bg-primary-80`,
        secondary: ` bg-primary-10 text-primary-60 enabled:hover:bg-primary-20 enabled:active:bg-primary-30`,
        tertiary: ` bg-white border border-primary-30 text-primary-60 enabled:hover:bg-primary-10 enabled:active:bg-primary-20`,
        ghost: ` bg-white text-primary-60 enabled:hover:text-primary-70 enabled:active:text-primary-80`,
      },
      dark: {
        true: '',
      },
    },
    compoundVariants: [
      {
        variant: 'primary',
        dark: true,
        className: 'bg-gray-100 enabled:hover:bg-gray-90 enabled:active:bg-gray-80',
      },
      {
        variant: 'secondary',
        dark: true,
        className:
          'bg-gray-20 text-gray-80 enabled:hover:bg-gray-30 enabled:active:bg-gray-40',
      },
      {
        variant: 'tertiary',
        dark: true,
        className:
          'border-gray-30 text-gray-80 enabled:hover:bg-gray-10 enabled:active:bg-gray-20',
      },
      {
        variant: 'ghost',
        dark: true,
        className: 'text-gray-80 enabled:hover:text-gray-90 enabled:active:text-gray-100',
      },
    ],
    defaultVariants: {
      variant: 'primary',
      dark: false,
    },
  },
);

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof ButtonVariants> {
  label?: string;
  disabled?: boolean;
}

const Button: FC<ButtonProps> = ({ label, variant, dark, disabled = false }) => {
  return (
    <button className={cn(ButtonVariants({ variant, dark }))} disabled={disabled}>
      {label}
    </button>
  );
};

export default Button;