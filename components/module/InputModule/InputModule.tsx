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
  inputSize?: 'default' | 'md';
}

const InputModule = ({
  variant = 'default',
  disabled = false,
  readOnly = false,
  inputSize = 'default',
  helperText,
  label,
  ...props
}: InputModuleProps) => {
  return (
    <div
      className={`${disabled ? 'opacity-30' : ''} flex flex-col items-start gap-[8px] self-stretch`}
    >
      {label && <Label label={label} disabled={disabled} />}
      <Input
        variant={variant}
        disabled={disabled}
        readOnly={readOnly}
        inputSize={inputSize}
        {...props}
      />
      {helperText && (
        <HelperText variant={variant} helperText={helperText} disabled={disabled} />
      )}
    </div>
  );
};

export default InputModule;
