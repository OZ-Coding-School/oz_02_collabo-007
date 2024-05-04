import Button from '@/components/core/Button/Button';
import InputModule from '@/components/module/InputModule/InputModule';
import InputPassword from '@/components/organism/SigninForm/InputPassword';
import Link from 'next/link';

export default function Home() {
  return (
    <main className="flex h-full w-full flex-col items-center gap-[56px] px-[20px] py-[80px]">
      <h1 className="text-headline-2">알케미스트</h1>
      <form className="flex w-full flex-col gap-[40px]">
        <div className="flex flex-col gap-[20px]">
          <fieldset className="gap-[24px]">
            <InputModule
              type="text"
              label="휴대폰 번호"
              placeholder="휴대폰 번호"
              inputSize="lg"
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
          <Link href="/">
            <div className="h-12 w-full">
              <Button variant="primary" label="로그인" />
            </div>
          </Link>
          <Link href="/signup">
            <div className="h-12 w-full">
              <Button variant="ghost" colors="gray" label="회원 가입" />
            </div>
          </Link>
        </div>
      </form>
    </main>
  );
}
