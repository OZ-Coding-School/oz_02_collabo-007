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
          <div>
            <span>랭킹</span>
            <div>
              <div>단식</div>
              <div>복식</div>
              <div>팀</div>
            </div>
            <div>그래프</div>
            <div>
              <div>
                <span>최근전적</span>
                <Link href={`/records`}>전체 전적 보기</Link>
              </div>
              <div></div>
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
