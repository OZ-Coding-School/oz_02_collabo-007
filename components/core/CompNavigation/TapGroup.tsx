import { cn } from '@/lib/utils/cn';
import { Tab } from './Tab';

export type Item = {
  text: string;
  option: { [key: string]: string | undefined }[];
  segment?: string;
  parallelRoutesKey?: string;
};

export const TabGroup = ({
  path,
  items,
  variant,
}: {
  path: string;
  items: Item[];
  variant: 'circle' | 'round' | 'underBar' | undefined | null;
}) => {
  return (
    <div
      className={cn(
        `no-scrollbar ml-[-20px] flex w-[calc(100%+40px)] gap-[12px] overflow-x-scroll px-[20px]`,
        variant === 'underBar' && `ml-0 gap-[4px]`,
      )}
    >
      {items.map((item, index) => (
        <Tab
          key={index}
          item={item}
          path={path}
          variant={variant}
          defaultValue={items[0]}
        />
      ))}
    </div>
  );
};
