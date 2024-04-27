import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/core/Button/Button';

const meta = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },

  tags: ['autodocs'],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    label: 'Button',
  },
};

export const Secondary: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
  },
};

export const Tertiary: Story = {
  args: {
    label: 'Button',
    variant: 'tertiary',
  },
};

export const Ghost: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
  },
};
