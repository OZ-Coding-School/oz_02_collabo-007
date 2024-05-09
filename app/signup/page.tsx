import React from 'react';
import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import { SignUpForm } from '@/components/organism/SignupForm/SignUpForm';

const page = () => {
  return (
    <div className="no-scrollbar relative flex h-full w-full flex-col overflow-scroll">
      <HeaderBar title="회원 가입" backBtn />
      <SignUpForm />
    </div>
  );
};

export default page;
