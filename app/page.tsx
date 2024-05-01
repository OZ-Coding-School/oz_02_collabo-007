import Button from '@/components/core/Button/Button';
import Image from 'next/image';
import visibleIcon from './_asset/icons/visible.svg';

export default function Home() {
  return (
    <main>
      <div>
        <div>
          <span>
            김형섭<p>&gt;</p>
          </span>
          <span>
            <Image src={visibleIcon} width={24} height={24} alt="visible" />
          </span>
          <span>
            <Image src={visibleIcon} width={24} height={24} alt="visible" />
          </span>
        </div>
        <Image src="" width={24} height={24} alt="visible" />
        <Button />
      </div>
      <main></main>
    </main>
  );
}
