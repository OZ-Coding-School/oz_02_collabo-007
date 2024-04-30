import HelperText from '@/components/core/HelperText/HelperText';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { InputHTMLAttributes } from 'react';

interface InputModuleProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'display';
  disabled?: boolean;
  readOnly?: boolean;
  helperText?: string;
  label?: string;
}

const InputModule = ({
  variant = 'default',
  disabled = false,
  readOnly = false,
  helperText,
  label,
  ...props
}: InputModuleProps) => {
  return (
    <div className={`${disabled ? 'opacity-30' : ''}`}>
      {label && <Label label={label} disabled={disabled} />}
      <Input variant={variant} disabled={disabled} readOnly={readOnly} {...props} />
      {helperText && (
        <HelperText variant={variant} helperText={helperText} disabled={disabled} />
      )}
    </div>
  );
};

export default InputModule;
