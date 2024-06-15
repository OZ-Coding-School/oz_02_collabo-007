import React from 'react';
import NavItem from '@/components/core/NavItem/NavItem';
import Home from '@/app/_asset/icons/home.svg';
import HomeFilled from '@/app/_asset/icons/home-filled.svg';
import Award from '@/app/_asset/icons/award.svg';
import AwardFilled from '@/app/_asset/icons/award-filled.svg';
import Flag from '@/app/_asset/icons/flag.svg';
import FlagFilled from '@/app/_asset/icons/flag-filled.svg';
import User from '@/app/_asset/icons/user.svg';
import UserFilled from '@/app/_asset/icons/user-filled.svg';

export const NAV_LINK = [
  {
    name: '홈',
    url: '/',
    icon: <Home width={24} height={24} fill="#393939" />,
    fillIcon: <HomeFilled width={24} height={24} fill="#FC5214" />,
  },
  {
    name: '랭킹',
    url: '/ranking/',
    icon: <Award width={24} height={24} fill="#393939" />,
    fillIcon: <AwardFilled width={24} height={24} fill="#FC5214" />,
  },
  {
    name: '대회',
    url: '/competition/',
    icon: <Flag width={24} height={24} fill="#393939" />,
    fillIcon: <FlagFilled width={24} height={24} fill="#FC5214" />,
  },
  {
    name: '마이페이지',
    url: '/mypage/',
    icon: <User width={24} height={24} fill="#393939" />,
    fillIcon: <UserFilled width={24} height={24} fill="#FC5214" />,
  },
];

const Navbar = () => {
  return (
    <div className="sticky bottom-0 flex w-full items-center justify-center bg-white px-[16px] shadow-lg">
      {NAV_LINK.map(({ name, url, icon, fillIcon }, index) => (
        <NavItem key={index} name={name} url={url} icon={icon} fillIcon={fillIcon} />
      ))}
    </div>
  );
};

export default Navbar;
