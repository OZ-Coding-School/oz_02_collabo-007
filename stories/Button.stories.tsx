import type { Meta, StoryObj } from '@storybook/react';
import Button from '@/components/core/Button/Button';
import clsx from 'clsx';
import { Pretendard } from '@/app/fonts';

const meta = {
  title: 'Core/Button',
  component: Button,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div
        className={clsx(Pretendard.variable, 'font-pretendard')}
        style={{ width: '81px', height: '48px' }}
      >
        <Story />
      </div>
    ),
  ],

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

export const PrimaryDark: Story = {
  args: {
    label: 'Button',
    dark: true,
  },
};

export const SecondaryDark: Story = {
  args: {
    label: 'Button',
    variant: 'secondary',
    dark: true,
  },
};

export const TertiaryDark: Story = {
  args: {
    label: 'Button',
    variant: 'tertiary',
    dark: true,
  },
};

export const GhostDark: Story = {
  args: {
    label: 'Button',
    variant: 'ghost',
    dark: true,
  },
};
