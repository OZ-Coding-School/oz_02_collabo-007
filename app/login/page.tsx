import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import InputPassword from '@/components/organism/LoginForm/InputPassword';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="w-screen h-screen flex flex-col items-center px-[20px] py-[80px]">
      <div className="w-[335px] flex flex-col items-center">
        <h1 className="text-headline-2">알케미스트</h1>
        <form className="w-full mt-14">
          <fieldset>
            <InputModule
              type="text"
              label="휴대폰 번호"
              placeholder="휴대폰 번호"
              inputSize="lg"
            />
            <InputPassword />
          </fieldset>
          <div className="flex justify-between mt-5">
            <div className="flex justify-center">
              <input id="remember" type="checkbox" name="remember" />
              <label
                htmlFor="remember"
                className="ml-[8px] text-body-2 text-gray-80 leading-[20px]"
              >
                자동 로그인
              </label>
            </div>
            <Link href="/#" className="text-sub-headline-2 text-primary-60 ">
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
