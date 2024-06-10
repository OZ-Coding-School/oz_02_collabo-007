'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React, { FC, useState } from 'react';

interface Props {
  name: string;
  url: string;
  icon: React.ReactNode;
  fillIcon: React.ReactNode;
}

const NavItem: FC<Props> = ({ name, url, icon, fillIcon }) => {
  const pathname = usePathname();
  const currentPathname = new URL(pathname, window.location.origin).pathname;
  const targetPathname = new URL(url, window.location.origin).pathname;

  const [currentTab, setCurrentTab] = useState(targetPathname === currentPathname);
  return (
    <Link
      href={url}
      className="flex w-[85.75px] flex-1 flex-col items-center justify-center gap-[8px] self-stretch p-[8px] text-gray-60"
    >
      {currentTab ? fillIcon : icon}
      <span className={`text-sub-headline-3 ${currentTab && 'text-primary-60'}`}>
        {name}
      </span>
    </Link>
  );
};

export default NavItem;
