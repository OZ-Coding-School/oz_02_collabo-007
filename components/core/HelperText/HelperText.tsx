import warning from '@/app/_asset/icons/warning-circle.svg';
import error from '@/app/_asset/icons/error-circle.svg';
import success from '@/app/_asset/icons/success-circle.svg';
import Image from 'next/image';

interface HelperTextProps {
  variant: 'default' | 'success' | 'error' | 'warning' | 'display';
  helperText?: string;
  disabled?: boolean;
}

const helperTextOptions = {
  success: { icon: success, color: 'text-success-60' },
  warning: { icon: warning, color: 'text-warning-60' },
  error: { icon: error, color: 'text-error-60' },
  default: { icon: null, color: 'text-gray-60' },
  display: { icon: null, color: 'text-gray-60' },
};

const HelperText = ({ variant, helperText, disabled }: HelperTextProps) => {
  let { color, icon } = helperTextOptions[variant];

  if (disabled) {
    color = 'text-gray-60';
    icon = null;
  }

  return (
    <p className={`flex font-thin text-xs ${color}`}>
      {icon !== null ? (
        <Image
          priority
          src={icon}
          alt={variant}
          width={16}
          height={16}
          className={`mr-[6px]`}
        />
      ) : null}
      {helperText && helperText}
    </p>
  );
};

export default HelperText;
