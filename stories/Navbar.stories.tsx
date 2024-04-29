import type { Meta, StoryObj } from '@storybook/react';
import Navbar from '@/components/module/Navbar/Navbar';

const meta = {
  title: 'module/Navbar',
  component: Navbar,
  parameters: {
    layout: 'centered',
    nextjs: {
      appDirectory: true,
      navigation: {
        pathname: '/',
      },
    },
  },
  decorators: [
    (Story) => (
      <div style={{ width: '375px' }}>
        <Story />
      </div>
    ),
  ],
  tags: ['autodocs'],
} satisfies Meta<typeof Navbar>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Nav: Story = {};
