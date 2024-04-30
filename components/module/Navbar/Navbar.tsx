import React from 'react';
import NavItem from '@/components/core/NavItem/NavItem';
// icon
import home from '@/app/_asset/icons/home.svg';
import homeFilled from '@/app/_asset/icons/home-filled.svg';
import award from '@/app/_asset/icons/award.svg';
import awardFilled from '@/app/_asset/icons/award-filled.svg';
import flag from '@/app/_asset/icons/flag.svg';
import flagFilled from '@/app/_asset/icons/flag-filled.svg';
import user from '@/app/_asset/icons/user.svg';
import userFilled from '@/app/_asset/icons/user-filled.svg';

export const NAV_LINK = [
  { name: '홈', url: '/', icon: home, fillIcon: homeFilled },
  { name: '랭킹', url: '/ranking', icon: award, fillIcon: awardFilled },
  { name: '대회', url: '/competition', icon: flag, fillIcon: flagFilled },
  { name: '마이페이지', url: '/myPage', icon: user, fillIcon: userFilled },
];

const Navbar = () => {
  return (
    <div className="w-full flex justify-center items-center bg-white">
      {NAV_LINK.map(({ name, url, icon, fillIcon }, index) => (
        <NavItem key={index} name={name} url={url} icon={icon} fillIcon={fillIcon} />
      ))}
    </div>
  );
};

export default Navbar;
