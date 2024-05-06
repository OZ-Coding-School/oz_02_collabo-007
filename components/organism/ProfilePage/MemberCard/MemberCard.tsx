import Avatar from '@/components/core/Avatar/Avatar';
import React, { FC } from 'react';
import { StaticImageData } from 'next/image';

interface MemberCardProps {
  data: {
    name: string;
    image: StaticImageData;
  }[];
}

const MemberCard: FC<MemberCardProps> = ({ data }) => {
  return (
    <div className="flex items-start gap-[24px] self-stretch">
      {data.map(({ name, image }, index) => (
        <Avatar key={index} name={name} image={image} />
      ))}
    </div>
  );
};

export default MemberCard;
