import React, { FC } from 'react';
import XIcon from '@/app/_asset/icons/x.svg';
import SearchIcon from '@/app/_asset/icons/search.svg';
import Input from '@/components/core/Input/Input';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { cn } from '@/lib/utils/cn';

interface Props {
  handleCloseModal: () => void;
  type: string;
  label: string;
  children: React.ReactNode;
}

const ModalContainer: FC<Props> = ({ handleCloseModal, type, label, children }) => {
  const ModalActionBtn = () => {
    return (
      <XIcon
        width={24}
        height={24}
        fill="#393939"
        onClick={() => handleCloseModal()}
        className="cursor-pointer"
      />
    );
  };

  return (
    <>
      <HeaderBar title={label} actionBtn={<ModalActionBtn />} />

      <div className="relative flex flex-col gap-[10px] self-stretch bg-white px-[20px] py-[16px]">
        <Input name={`${type}Search`} placeholder={label} className="pl-[44px]" />

        <SearchIcon
          width={20}
          height={20}
          fill="#A6A6A6"
          className="absolute left-[32px] top-[26px]"
        />
      </div>
      <div
        className={cn(
          'flex flex-1 flex-col items-center self-stretch text-body-2',
          `${type === 'club' ? 'gap-[16px] px-[20px] py-[24px]' : 'py-[12px]'}`,
        )}
      >
        {children}
      </div>
    </>
  );
};

export default ModalContainer;
