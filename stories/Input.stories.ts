import Input from '@/components/core/Input/Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const defaultInput: Story = {
  args: {
    variant: 'default',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const hoverInput: Story = {
  args: {
    variant: 'hover',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const pressedInput: Story = {
  args: {
    variant: 'pressed',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const activeInput: Story = {
  args: {
    variant: 'active',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const focusInput: Story = {
  args: {
    variant: 'focus',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const filledInput: Story = {
  args: {
    variant: 'filled',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const successInput: Story = {
  args: {
    variant: 'success',
    type: 'text',
    label: 'Label',
    helperText: 'Success text',
    helperTextColor: 'success',
    placeholder: 'Placeholder text',
  },
};

export const errorInput: Story = {
  args: {
    variant: 'error',
    type: 'text',
    label: 'Label',
    helperText: 'Error text',
    helperTextColor: 'error',
    placeholder: 'Placeholder text',
  },
};

export const warningInput: Story = {
  args: {
    variant: 'warning',
    type: 'text',
    label: 'Label',
    helperText: 'Warning text',
    helperTextColor: 'warning',
    placeholder: 'Placeholder text',
  },
};

export const disabledInput: Story = {
  args: {
    variant: 'disabled',
    type: 'text',
    label: 'Label',
    labelColor: 'disabled',
    helperText: 'Helper text',
    helperTextColor: 'disabled',
    placeholder: 'Placeholder text',
  },
};

export const displayInput: Story = {
  args: {
    variant: 'display',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};
