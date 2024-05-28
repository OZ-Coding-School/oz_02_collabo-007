import WarningIcon from '@/app/_asset/icons/warning-circle.svg';
import ErrorIcon from '@/app/_asset/icons/error-circle.svg';
import SuccessIcon from '@/app/_asset/icons/success-circle.svg';
import { VariantProps, cva } from 'class-variance-authority';
import { FC } from 'react';
import { cn } from '@/lib/utils/cn';

export const HelperTextVariants = cva(
  `flex w-full items-center gap-[4px] self-stretch text-[12px] font-[400]`,
  {
    variants: {
      variant: {
        default: ' text-gray-60 ',
        success: ' text-success-60',
        error: ' text-error-60',
        warning: ' text-warning-60',
        display: ' text-gray-60',
      },
    },
    defaultVariants: {
      variant: 'default',
    },
  },
);

interface HelperTextProps extends VariantProps<typeof HelperTextVariants> {
  variant: 'default' | 'success' | 'error' | 'warning' | 'display';
  helperText?: string;
  disabled?: boolean;
}

const ICONS = {
  success: <SuccessIcon className="h-[16px] w-[16px] fill-success-60" />,
  warning: <WarningIcon className="h-[16px] w-[16px] fill-warning-60" />,
  error: <ErrorIcon className="h-[16px] w-[16px] fill-error-60" />,
  default: null,
  display: null,
};

const HelperText: FC<HelperTextProps> = ({ variant, helperText, disabled }) => {
  const icon = ICONS[variant];

  return (
    <p className={cn(HelperTextVariants({ variant }))}>
      {icon}
      {helperText}
    </p>
  );
};

export default HelperText;
