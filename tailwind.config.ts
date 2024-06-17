import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  future: {
    hoverOnlyWhenSupported: true,
  },
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './stories/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'check-icon': '/app/_asset/icons/check.svg',
      },
      fontFamily: {
        pretendard: ['var(--font-pretend)'],
      },
      boxShadow: {
        card: '0px 2px 8px 0px rgba(0, 0, 0, 0.12)',
        xl: '0px 2px 10px 0px rgba(0, 0, 0, 0.08)',
        lg: '0px -2px 8px 0px rgba(0, 0, 0, 0.04)',
      },
      fontSize: {
        'headline-1': [
          '36px',
          {
            lineHeight: '40px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-2': [
          '28px',
          {
            lineHeight: '36px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-3': [
          '24px',
          {
            lineHeight: '30px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-4': [
          '20px',
          {
            lineHeight: '28px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-5': [
          '18px',
          {
            lineHeight: '26px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-6': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-7': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'headline-8': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0%',
            fontWeight: '700',
          },
        ],
        'sub-headline-1': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        'sub-headline-2': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        'sub-headline-3': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0%',
            fontWeight: '500',
          },
        ],
        'body-1': [
          '16px',
          {
            lineHeight: '24px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
        'body-2': [
          '14px',
          {
            lineHeight: '20px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
        'body-3': [
          '12px',
          {
            lineHeight: '16px',
            letterSpacing: '0%',
            fontWeight: '400',
          },
        ],
      },
    },
    colors: {
      white: '#FFFFFF',
      black: '#000000',
      gray: {
        10: '#F9F9F9',
        20: '#F5F5F5',
        30: '#E9E9E9',
        40: '#D6D6D6',
        50: '#A6A6A6',
        60: '#787878',
        70: '#585858',
        80: '#393939',
        90: '#2D2D2D',
        100: '#121212',
      },
      primary: {
        10: '#FFEEE8',
        20: '#FED2C3',
        30: '#FEBCA4',
        40: '#FD8B62',
        50: '#FD7543',
        60: '#FC5214',
        70: '#E54B12',
        80: '#B33A0E',
        90: '#8B2D0B',
        100: '#6A2208',
      },
      success: {
        10: '#E1FAEE',
        20: '#BFEAD8',
        30: '#8FD9BA',
        40: '#64BD97',
        50: '#3AA478',
        60: '#138C59',
        70: '#10774C',
        80: '#0C5A39',
        90: '#004025',
        100: '#002616',
      },
      warning: {
        10: '#FFF6E9',
        20: '#FFEACB',
        30: '#FFDAA2',
        40: '#FFC876',
        50: '#FFB84D',
        60: '#FFA826',
        70: '#D98F20',
        80: '#B5771B',
        90: '#916016',
        100: '#6B4710',
      },
      error: {
        10: '#FEEAE8',
        20: '#FECCC8',
        30: '#FCA39D',
        40: '#FB786F',
        50: '#FA5044',
        60: '#F9291B',
        70: '#D42317',
        80: '#B11D13',
        90: '#8E170F',
        100: '#70120C',
      },
    },
  },
  plugins: [],
};
export default config;
