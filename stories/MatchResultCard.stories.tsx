import type { Meta, StoryObj } from '@storybook/react';
import MatchCard from '@/components/organism/CompetitionProgressPage/MatchCard';

const meta = {
  title: 'Module/MatchResultCard',
  component: MatchCard,
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
} satisfies Meta<typeof MatchCard>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    match: {
      court: 1,
      winner: {
        users: [{ name: '김형섭' }, { name: '이인호' }],
        scores: ['6', '6', '-'],
      },
      loser: {
        users: [{ name: '박성진' }, { name: '강민석' }],
        scores: ['3', '2', '-'],
      },
    },
  },
};
