import ResultCard from '@/components/module/ResultCard/ResultCard';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Module/ResultCard',
  component: ResultCard,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div className="w-[350px]">
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof ResultCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const SecondaryPrimary: Story = {
  args: { winner: true },
};

export const Secondary: Story = {};
