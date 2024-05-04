import Link from 'next/link';
import React, { FC } from 'react';
import chevronRightIcon from '@/app/_asset/icons/chevron-right.svg';
import Image from 'next/image';

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
      <Image src={chevronRightIcon} alt="chevronIcon" width={24} height={24} />
    </Link>
  );
};

export default NavigationTab;
