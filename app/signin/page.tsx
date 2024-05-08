import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import InputPassword from '@/components/organism/SigninForm/InputPassword';
import Link from 'next/link';
import { redirect } from 'next/navigation';

import React from 'react';

async function signInUser(formData: FormData) {
  'use server';

  const userFormData = {
    phone: formData.get('phone'),
    password: formData.get('password'),
  };

  const res = await fetch('https://alchemistapi.watcher.team/api/v1/auth/signin/', {
    credentials: 'include',
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(userFormData),
  });

  if (!res.ok) {
    console.log(res.json());
    throw new Error('Failed to fetch data');
  }

  const data = await res.json();
  console.log(data);

  redirect('/');

  //로컬스토리지에 액세스 토큰 저장 예정
}

const page = async () => {
  return (
    <main className="flex h-full w-full flex-col items-center gap-[56px] overflow-scroll px-[20px] py-[80px]">
      <h1 className="text-headline-2">알케미스트</h1>
      <form className="flex w-full flex-col gap-[40px]" action={signInUser}>
        <div className="flex flex-col gap-[20px]">
          <fieldset className="gap-[24px]">
            <InputModule
              type="text"
              label="휴대폰 번호"
              placeholder="휴대폰 번호"
              inputSize="lg"
              name="phone"
            />
            <InputPassword />
          </fieldset>
          <div className="flex justify-between">
            <div className="flex justify-center">
              <input id="remember" type="checkbox" name="remember" />
              <label
                htmlFor="remember"
                className="ml-[8px] text-body-2 leading-[20px] text-gray-80"
              >
                자동 로그인
              </label>
            </div>
            <Link href="/#" className="text-sub-headline-2 text-primary-60 ">
              비밀번호를 잊으셨나요?
            </Link>
          </div>
        </div>
        <div className="flex flex-col gap-[12px]">
          <div className="h-12 w-full">
            <Button variant="primary" label="로그인" />
          </div>
          <Link href="/signup">
            <div className="h-12 w-full">
              <Button variant="ghost" colors="gray" label="회원 가입" />
            </div>
          </Link>
        </div>
      </form>
    </main>
  );
};

export default page;
