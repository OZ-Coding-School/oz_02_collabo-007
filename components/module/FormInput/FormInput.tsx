import HelperText from '@/components/core/HelperText/HelperText';
import Input from '@/components/core/Input/Input';
import Label from '@/components/core/Label/Label';

interface FormInputProps {
  variant: 'default' | 'success' | 'error' | 'warning' | 'display' | null | undefined;
  disabled: boolean;
  readOnly: boolean;
  helperText?: string;
}

const FormInput = ({ variant, disabled, readOnly, helperText }: FormInputProps) => {
  return (
    <div className={`${disabled ? 'opacity-30' : ''}`}>
      <Label label="Label" disabled={disabled} />
      <Input variant={variant} disabled={disabled} readOnly={readOnly} />
      <HelperText variant={variant} helperText={helperText} />
    </div>
  );
};

export default FormInput;
