import warning from '@/app/_asset/icons/warning-circle.svg';
import error from '@/app/_asset/icons/error-circle.svg';
import success from '@/app/_asset/icons/success-circle.svg';
import Image from 'next/image';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from '@/lib/utils/cn';

export const HelperTextVariants = cva(`flex font-thin text-xs`, {
  variants: {
    variant: {
      default: ' text-gray-60',
      success: ' text-success-60',
      error: ' text-error-60',
      warning: ' text-warning-60',
      display: ' text-gray-60',
    },
  },
  defaultVariants: {
    variant: 'default',
  },
});

interface HelperTextProps extends VariantProps<typeof HelperTextVariants> {
  variant: 'default' | 'success' | 'error' | 'warning' | 'display';
  helperText?: string;
  disabled?: boolean;
}

const ICONS = {
  success: success,
  warning: warning,
  error: error,
  default: null,
  display: null,
};

const HelperText: FC<HelperTextProps> = ({ variant, helperText, disabled }) => {
  const icon = ICONS[variant];

  return (
    <p
      className={cn(
        HelperTextVariants({ variant }),
        'text-[12px] font-[400] leading-[16px]',
      )}
    >
      {icon !== null && !disabled && (
        <Image
          priority
          src={icon}
          alt={variant}
          width={16}
          height={16}
          className={`mr-[6px]`}
        />
      )}
      {helperText && helperText}
    </p>
  );
};

export default HelperText;
