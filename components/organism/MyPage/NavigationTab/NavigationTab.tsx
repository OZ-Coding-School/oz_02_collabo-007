import Link from 'next/link';
import React, { FC } from 'react';
import ChevronRightIcon from '@/app/_asset/icons/chevron-right.svg';

interface NavigationTabProps {
  link: string;
  description: string;
}

const NavigationTab: FC<NavigationTabProps> = ({ link, description }) => {
  return (
    <Link
      href={link}
      className="flex items-center gap-[16px] self-stretch px-[24px] py-[16px]"
    >
      <span className="flex-1">{description}</span>
      <ChevronRightIcon width={24} height={24} fill="#121212" />
    </Link>
  );
};

export default NavigationTab;
