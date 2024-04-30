import warning from '@/app/_asset/icons/warning-circle.svg';
import error from '@/app/_asset/icons/error-circle.svg';
import success from '@/app/_asset/icons/success-circle.svg';
import Image from 'next/image';

interface HelperTextProps {
  variant: string | null;
  helperText?: string;
}

const circleSvgs = {
  warning: warning,
  error: error,
  success: success,
};

const HelperText = ({ variant, helperText }: HelperTextProps) => {
  return (
    <p className={`flex font-thin text-xs text-${variant}-60`}>
      {variant === 'warning' || variant === 'error' || variant === 'success' ? (
        <Image
          priority
          src={circleSvgs[variant]}
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
