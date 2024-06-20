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
    <div className={`no-scrollbar flex w-full gap-[12px] overflow-x-scroll`}>
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
