import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center px-[20px] py-[80px]">
      <div className="w-[335px] flex flex-col items-center">
        <h1 className="text-[28px] font-bold">알케미스트</h1>
        <form className="w-full mt-14">
          <fieldset>
            <InputModule label="휴대폰 번호" placeholder="휴대폰 번호" inputSize="lg" />
            <div className="mt-6">
              <InputModule label="비밀번호" placeholder="비밀번호" inputSize="lg" />
            </div>
          </fieldset>
          <div className="flex justify-between mt-5">
            <div>
              <input type="checkbox" />
              <label>자동 로그인</label>
            </div>
            <Link href="/#">비밀번호를 잊으셨나요?</Link>
          </div>
          <div className="w-full h-12 mt-10">
            <Button variant="primary" label="로그인" />
          </div>
        </form>
        <div className="w-full h-12 mt-3">
          <Button variant="ghost" colors="gray" label="회원 가입" />
        </div>
      </div>
    </main>
  );
}
