'use client';

import Link from 'next/link';
import { useSearchParams } from 'next/navigation';
import { Item } from './TapGroup';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const TabVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      circle:
        'w-[52px] h-[52px] bg-gray-20 rounded-[99px] text-[14px] leading-[20px] font-[500]',
      round: `whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-[14px] leading-[20px] font-[400]`,
      underBar: `h-[32px] flex-1 text-[14px] leading-[20px] font-[400]`,
    },
    selected: {
      true: '',
      false: 'text-gray-80',
    },
  },
  compoundVariants: [
    {
      variant: 'circle',
      selected: true,
      class: 'bg-primary-60 text-white',
    },
    {
      variant: 'round',
      selected: true,
      class: 'bg-primary-10 text-primary-60',
    },
    {
      variant: 'underBar',
      selected: true,
      class: 'border-b-[2px] border-primary-60 text-primary-60',
    },
  ],
});

interface TabProps extends VariantProps<typeof TabVariants> {
  path: string;
  item: Item;
  defaultValue: Item;
}

export const Tab = ({ path, item, variant, defaultValue }: TabProps) => {
  const searchParams = useSearchParams();
  const params = new URLSearchParams(searchParams);

  const keyArr = item.option?.map((option) => Object.keys(option)[0]);

  item.option?.forEach((option) => {
    const key = Object.keys(option)[0];
    const value = option[key];

    if (value) params.set(key, value);
  });

  if (params.has('tier')) params.delete('tier');
  if (params.has('club')) params.delete('club');

  let isActive = searchParams.toString().includes(params.toString());
  if (
    keyArr.filter((key: string) => searchParams.has(key)).length === 0 &&
    item.text === defaultValue.text
  ) {
    isActive = true;
  }

  const href = `${path}?${params.toString()}`;
  return (
    <Link
      replace
      href={href}
      className={cn(TabVariants({ variant, selected: isActive ? true : false }))}
    >
      {item.text}
    </Link>
  );
};
