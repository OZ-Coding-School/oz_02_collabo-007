import type { Competition } from '@/@types/competition';

export const filterCompetition = ({
  data,
  status,
  tier,
  date,
}: {
  data: Competition[];
  status: string;
  tier: string;
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
    .filter((ele: Competition) => (tier !== '전체' ? ele.tier.includes(tier) : ele))
    .filter((ele: Competition) => (status !== '전체' ? ele.category === status : ele));

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
