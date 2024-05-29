import HelperText from '@/components/core/HelperText/HelperText';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';
import { InputHTMLAttributes } from 'react';

interface InputModuleProps extends InputHTMLAttributes<HTMLInputElement> {
  variant?: 'default' | 'success' | 'error' | 'warning' | 'display';
  helperText?: string;
  label?: string;
  inputSize?: 'md' | 'lg' | 'mdWith' | 'lgWith';
}

const InputModule = ({
  variant = 'default',
  inputSize = 'md',
  helperText,
  label,
  ...props
}: InputModuleProps) => {
  return (
    <div
      className={`${props.disabled ? 'opacity-30' : ''} flex flex-col items-start gap-[8px] self-stretch`}
    >
      {label && <Label label={label} name={props.name} />}
      <Input variant={variant} inputSize={inputSize} {...props} />
      {helperText && <HelperText variant={variant} helperText={helperText} />}
    </div>
  );
};

export default InputModule;
