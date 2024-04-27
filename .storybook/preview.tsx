import type { Preview } from '@storybook/react';
import '@/styles/globals.css';
import React from 'react';
import clsx from 'clsx';
import { Pretendard } from '../app/fonts';

const preview: Preview = {
  parameters: {
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/i,
      },
    },
  },
  decorators: [
    (Story) => (
      <div
        className={clsx(Pretendard.variable, 'font-pretendard', 'w-[81px]', 'h-[48px]')}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
