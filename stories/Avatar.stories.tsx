import type { Meta, StoryObj } from '@storybook/react';
import Avatar from '@/components/core/Avatar/Avatar';

const meta = {
  title: 'Core/Avatar',
  component: Avatar,
  parameters: {
    layout: 'centered',
  },
  decorators: [
    (Story) => (
      <div>
        <Story />
      </div>
    ),
  ],

  tags: ['autodocs'],
} satisfies Meta<typeof Avatar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    image: 'https://cdn.pixabay.com/photo/2022/11/29/11/30/lake-7624330_1280.jpg',
    name: '김영희',
  },
};

export const Secondary: Story = {
  args: {
    name: '김철수',
  },
};
