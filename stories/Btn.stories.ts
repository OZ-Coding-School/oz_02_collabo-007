import type { Meta, StoryObj } from '@storybook/react';
import Btn from './Btn';

const meta = {
  title: 'Example/btn',
  component: Btn,
  parameters: {
    layout: 'centered',
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Btn>;

export default meta;
type Story = StoryObj<typeof meta>;

export const PrimaryFooter: Story = {
  args: {
    size: 'lg',
    variant: 'red',
    label: 'button',
  },
};

export const NotPrimaryFooter: Story = {
  args: {
    size: 'md',
    variant: 'grey',
  },
};
