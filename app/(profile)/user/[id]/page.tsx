import HeaderBar from '@/components/core/HeaderBar/HeaderBar';
import HomeUserProfile from '@/components/module/HomeUserProfile/HomeUserProfile';
import { cookies } from 'next/headers';
import Link from 'next/link';
import React from 'react';

const page = async ({ params }: { params: { id: number } }) => {
  const cookie = cookies();
  const user = cookie.get('access');

  try {
    const res = await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/user/${params.id}`, {
      credentials: 'include',
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
      },
    }).then((res) => res.json());

    console.log(res);

    return (
      <div className="w-full bg-gray-30">
        <HeaderBar title="프로필" backBtn />
        <div className="no-scrollbar flex w-full flex-col gap-[8px] overflow-y-scroll">
          <div className="w-full bg-white">
            <HomeUserProfile userInfo={res} user={user} />
          </div>
          <div className="flex flex-col gap-[40px] bg-white p-[20px]">
            <div className="flex flex-col gap-[12px]">
              <span className="text-headline-6 text-gray-100">랭킹</span>
              <div className="flex gap-[12px]">
                <div className="flex flex-1 flex-col gap-[4px] rounded-[8px] bg-gray-20 p-[12px] text-center">
                  <span className="text-body-3 text-gray-60">단식</span>
                  <span className="text-headline-6 text-gray-60">
                    {res.ranking ? res.ranking.single : '-'}
                  </span>
                </div>
              </div>
              <div>그래프</div>
            </div>
            <div className="flex w-full flex-col gap-[12px]">
              <div className="flex justify-between">
                <span className="text-headline-6 text-gray-100">최근전적</span>
                <Link
                  href={`/user/${params.id}/record/`}
                  className="text-subheadline-2 text-gray-60"
                >
                  전체 전적 보기
                </Link>
              </div>
              <div>최근전적카드</div>
            </div>
          </div>
        </div>
      </div>
    );
  } catch (e) {
    console.log(e);
  }
};

export default page;
