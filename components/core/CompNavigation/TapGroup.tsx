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
      className={`no-scrollbar sticky top-0 flex w-full gap-[12px] overflow-x-scroll ${variant === 'circle' ? 'flex-row-reverse' : ''}`}
    >
      {items.map((item, index) => (
        <Tab key={index} item={item} path={path} variant={variant} />
      ))}
    </div>
  );
};
