import React from 'react';
import NavItem from '@/components/core/NavItem/NavItem';
// icon
import home from '@/public/icons/home.svg';
import homeFilled from '@/public/icons/home-filled.svg';
import award from '@/public/icons/award.svg';
import awardFilled from '@/public/icons/award-filled.svg';
import flag from '@/public/icons/flag.svg';
import flagFilled from '@/public/icons/flag-filled.svg';
import user from '@/public/icons/user.svg';
import userFilled from '@/public/icons/user-filled.svg';

export const NAV_LINK = [
  { name: '홈', url: '/', icon: home, fillIcon: homeFilled },
  { name: '랭킹', url: '/ranking', icon: award, fillIcon: awardFilled },
  { name: '대회', url: '/competition', icon: flag, fillIcon: flagFilled },
  { name: '마이페이지', url: '/myPage', icon: user, fillIcon: userFilled },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center px-[16px] bg-white">
      {NAV_LINK.map(({ name, url, icon, fillIcon }, index) => (
        <NavItem key={index} name={name} url={url} icon={icon} fillIcon={fillIcon} />
      ))}
    </div>
  );
};

export default Navbar;
