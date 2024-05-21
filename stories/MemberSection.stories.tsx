import MemberSection from '@/components/module/MemberSection/MemberSection';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'Module/MemberSection',
  component: MemberSection,
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
} satisfies Meta<typeof MemberSection>;

export default meta;
type Story = StoryObj<typeof meta>;

const userData = [
  {
    id: 1,
    username: '철수',
    imageUrl: 'https://cdn.pixabay.com/photo/2022/11/29/11/30/lake-7624330_1280.jpg',
    team: {
      id: 1,
      name: '라온a',
    },
  },
  {
    id: 2,
    username: '영희',
    imageUrl: null,
    team: {
      id: 2,
      name: '라온b',
    },
  },
];

export const Primary: Story = {
  args: { userData: userData },
};
