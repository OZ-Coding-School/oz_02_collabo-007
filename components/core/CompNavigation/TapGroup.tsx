import { Tab } from './Tab';

export type Item = {
  text: string;
  option?: string;
  value?: string;
  segment?: string;
  parallelRoutesKey?: string;
};

export const TabGroup = ({
  path,
  parallelRoutesKey,
  items,
  variant,
}: {
  path: string;
  parallelRoutesKey?: string;
  items: Item[];
  variant: 'circle' | 'round' | 'underBar' | undefined | null;
}) => {
  return (
    <div
      className={`no-scrollbar sticky top-0 flex gap-[12px] overflow-x-scroll ${variant === 'circle' ? 'flex-row-reverse' : ''}`}
    >
      {items.map((item) => (
        <Tab
          key={path + item.option + '=' + item.value}
          item={item}
          path={path}
          parallelRoutesKey={parallelRoutesKey}
          variant={variant}
        />
      ))}
    </div>
  );
};
