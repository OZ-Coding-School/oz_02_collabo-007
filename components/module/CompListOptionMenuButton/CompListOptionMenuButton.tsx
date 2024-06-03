import { cn } from '@/lib/utils/cn';
import { VariantProps, cva } from 'class-variance-authority';
import Link from 'next/link';
import React from 'react';

const CompListOptionMenuButtonVariants = cva(
  'flex items-center justify-center text-body-2',
  {
    variants: {
      variant: {
        circle: '',
        round: `whitespace-nowrap rounded-[99px] bg-gray-20 px-[12px] py-[6px]`,
        underBar: `h-[32px] flex-1`,
      },
      selected: {
        true: '',
        false: 'text-gray-80',
      },
    },
    compoundVariants: [
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
  },
);

interface CompListOptionMenuButtonProps
  extends VariantProps<typeof CompListOptionMenuButtonVariants> {
  pathName: string;
  title: string;
  query?: { [key: string]: string | undefined };
  isSelected: boolean;
  compStatus?: string;
}

const CompListOptionMenuButton = ({
  pathName,
  query,
  variant,
  isSelected,
  title,
}: CompListOptionMenuButtonProps) => {
  return (
    <>
      <Link
        href={{
          pathname: pathName,
          query: query,
        }}
        className={cn(
          CompListOptionMenuButtonVariants({
            variant,
            selected: isSelected ? true : false,
          }),
        )}
        replace
      >
        {title}
      </Link>
    </>
  );
};
export default CompListOptionMenuButton;
