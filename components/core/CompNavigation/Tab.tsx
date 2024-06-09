'use client';

import Link from 'next/link';
import { useSearchParams, useSelectedLayoutSegment } from 'next/navigation';
import { Item } from './TapGroup';
import { VariantProps, cva } from 'class-variance-authority';
import { cn } from '@/lib/utils/cn';

const TabVariants = cva('flex items-center justify-center', {
  variants: {
    variant: {
      circle: 'text-sub-headline-2 px-[16px] py-[10px] bg-gray-20 rounded-[99px]',
      round: `whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px] text-body-2`,
      underBar: `h-[32px] flex-1 text-body-2`,
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
  parallelRoutesKey?: string;
  item: Item;
}

export const Tab = ({ path, item, variant }: TabProps) => {
  const searchParams = useSearchParams();
  const searchValue = item.option && searchParams.get(item.option);
  const href =
    item.option && item.value ? path + '/?' + item.option + '=' + item.value : path;
  const isActive =
    // Example home pages e.g. `/layouts`
    (!item.value && searchValue === null) ||
    searchValue === item.value ||
    // Nested pages e.g. `/layouts/electronics`
    searchValue === item.value;

  return (
    <Link
      href={href}
      className={cn(TabVariants({ variant, selected: isActive ? true : false }))}
    >
      {item.text}
    </Link>
  );
};
