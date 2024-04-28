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
    inputSize: 'lg',
    variant: 'default',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const hoverInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'hover',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const pressedInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'pressed',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const activeInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'active',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const focusInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'focus',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const filledInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'filled',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const successInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'success',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const errorInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'error',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const warningInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'warning',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const disabledInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'disabled',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};

export const displayInput: Story = {
  args: {
    inputSize: 'lg',
    variant: 'display',
    type: 'text',
    label: 'Label',
    labelColor: 'default',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
  },
};
