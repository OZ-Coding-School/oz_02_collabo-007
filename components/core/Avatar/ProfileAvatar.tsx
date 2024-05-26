import React from 'react';

interface ProfileAvatarProps {
  image: string;
}

const ProfileAvatar = ({ image }) => {
  return (
    <div className="relative flex h-[80px] w-[80px] items-center justify-center overflow-hidden rounded-[50%] bg-gray-20">
      {imagel && (
        <Image
          src={image}
          fill
          sizes="80px"
          alt="visible"
          style={{ borderRadius: '50%' }}
        />
      )}
      {!imagel ? <UserIcon width={32} height={32} fill="#787878" /> : null}
    </div>
  );
};

export default ProfileAvatar;
