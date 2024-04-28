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

export const defaultButton: Story = {
  args: {
    inputSize: 'lg',
    variant: 'default',
    label: 'Label',
    helperText: 'Helper text',
    type: 'text',
    placeholder: ' Placeholder text',
  },
};
