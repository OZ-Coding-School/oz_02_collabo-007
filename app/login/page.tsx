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
            <InputModule
              type="text"
              label="휴대폰 번호"
              placeholder="휴대폰 번호"
              inputSize="lg"
            />
            <div className="mt-6 relative">
              <InputModule
                type="password"
                label="비밀번호"
                placeholder="비밀번호"
                inputSize="lgWith"
              />
              <input
                type="checkbox"
                className="appearance-none absolute w-[24px] h-[24px] right-[12px] bottom-[12px] border-none bg-cover bg-[url('../app/_asset/icons/visible.svg')]"
              />
            </div>
          </fieldset>
          <div className="flex justify-between mt-5">
            <div className="flex justify-center">
              <input
                id="remember"
                type="checkbox"
                className="appearance-none w-[20px] h-[20px] border-[2px] border-gray-40 rounded-[4px] bg-cover checked:bg-primary-60 checked:border-primary-60 checked:bg-[url('../app/_asset/icons/check.svg')]"
              />
              <label
                htmlFor="remember"
                className="ml-[8px] text-[14px] text-gray-80 leading-[20px] font-[400]"
              >
                자동 로그인
              </label>
            </div>
            <Link
              href="/#"
              className="text-[14px] text-primary-60 leading-[20px] font-[500] "
            >
              비밀번호를 잊으셨나요?
            </Link>
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
