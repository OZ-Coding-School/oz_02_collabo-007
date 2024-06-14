import type { Competition } from '@/@types/competition';

export const filterCompetition = ({
  data,
  currentStatus,
  currentTier,
  date,
}: {
  data: Competition[];
  currentStatus: string;
  currentTier: string;
  date: string;
}) => {
  const category: { [key: string]: string } = {
    'Registration Available': 'before',
    'Registration Unavailable': 'before',
    'Registration Confirmed': 'before',
    'Waitlist Available': 'before',
    before: 'before',
    during: 'during',
    ended: 'ended',
  };

  const setCategory = (comp: Competition): Competition => {
    comp['category'] = category[comp.status];
    return comp;
  };

  const newArr = data
    .map((ele: Competition) => setCategory(ele))
    .filter((ele: Competition) => {
      if (currentTier === 'all') return true;
      if (ele.tier === null) return false;
      return ele.tier.includes(currentTier);
    })
    .filter((ele: Competition) => {
      if (currentStatus === 'all') return ele.category === 'before';
      if (ele.status === null) return false;
      return ele.category === currentStatus;
    });

  const today = new Date().getTime();

  const sortedArr =
    date === 'closest'
      ? newArr.sort((a: Competition, b: Competition) => {
          const diffA = Math.abs(new Date(a.startDate).getTime() - today);
          const diffB = Math.abs(new Date(b.startDate).getTime() - today);
          return diffA - diffB;
        })
      : newArr.sort(
          (a: Competition, b: Competition) =>
            new Date(a.startDate).getTime() - new Date(b.startDate).getTime(),
        );

  return sortedArr;
};
