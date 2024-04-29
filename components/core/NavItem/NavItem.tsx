'use client';

import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';

interface Props {
  name: string;
  url: string;
  icon: string;
  fillIcon: string;
}

const NavItem: FC<Props> = ({ name, url, icon, fillIcon }) => {
  const pathname = usePathname();
  console.log(pathname);
  const [currentTab, setCurrentTab] = useState(pathname === url);

  return (
    <Link
      href={url}
      className="w-[85.75px] h-[64px] flex flex-col justify-center items-center gap-[8px] text-gray-60"
    >
      <Image
        priority
        src={currentTab ? fillIcon : icon}
        alt={name}
        width={24}
        height={24}
      />
      <span
        className={`text-[12px] font-[500] leading-[16px] ${currentTab && 'text-primary-60'}`}
      >
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
