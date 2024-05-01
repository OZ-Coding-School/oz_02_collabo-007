import React, { FC } from 'react';

interface Props {
  title: string;
  children: React.ReactNode;
}

const HeaderBar: FC<Props> = ({ title, children }) => {
  return (
    <div className="w-full flex justify-center items-center gap-[16px] bg-white">
      <div className="w-[56px] h-[56px] p-[16px]">
        {title === '회원 가입' && <>{children}</>}
      </div>
      <div className="flex-1 text-center text-headline-6">{title}</div>
      <div className="w-[56px] h-[56px] p-[16px]">
        {title === '클럽 검색' && <>{children}</>}
      </div>
    </div>
  );
};

export default HeaderBar;
