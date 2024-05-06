import React from 'react';
import CrownIcon from '@/components/core/Icons/CrownIcon/CrownIcon';
import StarIcon from '@/components/core/Icons/StarIcon/StarIcon';
import testImg from '@/public/tennis.jpeg';
import Image from 'next/image';
import { cn } from '@/lib/utils/cn';

const ResultCard = ({ winner }: { winner?: boolean }) => {
  return (
    <div
      className={cn(
        'flex w-full flex-col items-center gap-[16px] rounded-[8px] px-[16px] py-[20px] shadow-card',
        `${winner && 'border-2 border-warning-60'}`,
      )}
    >
      <div className="flex items-center gap-[8px]">
        <div className="relative flex h-[24px] w-[24px] items-center justify-center">
          <StarIcon
            className={cn(
              'absolute h-[24px] w-[24px]',
              `${winner ? 'fill-warning-60' : 'fill-gray-50'}`,
            )}
          />
          <CrownIcon className="absolute h-[16px] w-[16px] fill-white" />
        </div>
        <div className="text-headline-6">{winner ? '우승' : '준우승'}</div>
      </div>

      <div className="flex items-start gap-[12px] self-stretch">
        <div className="flex flex-1 flex-col items-center justify-center gap-[8px]">
          <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testImg} alt="user" fill sizes="48px" className="object-cover" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="text-sub-headline-2">김형섭</div>
            <div className="text-body-3 text-gray-60">라온 테니스</div>
          </div>
        </div>
        <div className="flex flex-1 flex-col items-center justify-center gap-[8px]">
          <div className="relative h-[48px] w-[48px] overflow-hidden rounded-full">
            <Image src={testImg} alt="user" fill sizes="48px" className="object-cover" />
          </div>
          <div className="flex w-full flex-col items-center justify-center">
            <div className="text-sub-headline-2">김형섭</div>
            <div className="text-body-3 text-gray-60">라온 테니스</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ResultCard;
