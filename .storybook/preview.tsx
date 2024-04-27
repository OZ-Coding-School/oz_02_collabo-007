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
        className={clsx(Pretendard.variable, 'font-pretendard')}
        style={{ width: '81px', height: '48px' }}
      >
        <Story />
      </div>
    ),
  ],
};

export default preview;
