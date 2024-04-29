import Input from '@/components/core/Input/Input';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'input',
  component: Input,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div style={{ width: '328px' }}>
        <Story />
      </div>
    ),
  ],
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

export const displayInput: Story = {
  args: {
    variant: 'display',
    type: 'text',
    label: 'Label',
    helperText: 'Helper text',
    placeholder: 'Placeholder text',
    readOnly: true,
  },
};
