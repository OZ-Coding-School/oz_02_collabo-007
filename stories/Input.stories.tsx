import InputModule from '@/components/module/InputModule/InputModule';
import { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Core/Input',
  component: InputModule,
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
} satisfies Meta<typeof InputModule>;

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
