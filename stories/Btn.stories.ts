import type { Meta, StoryObj } from '@storybook/react';
import Btn from '../components/core/Button/Btn';

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

export const PrimaryBtn: Story = {
  args: {
    size: 'lg',
    variant: 'red',
    label: 'button',
  },
};

export const GrayBtn: Story = {
  args: {
    size: 'md',
    variant: 'gray',
    label: 'button',
  },
};

export const successBtn: Story = {
  args: {
    size: 'wlg',
    variant: 'green',
    label: 'button',
  },
};
