interface Competition {
  id: number;
  name: string;
  startDate: string;
  endData: string;
  matchTypeDetails: {
    gender: 'female' | 'male' | 'mix' | 'team';
    type: 'single' | 'double' | 'team';
  };
  tier: string;
  location: string;
  imageUrl: string;
  status: string;
  waitingCount: number;
  category: string;
}

export const filterCompetition = (
  compData: Competition[],
  status = '전체',
  tier = '전체',
  date = 'closest',
) => {
  const category: { [key: string]: string } = {
    '신청 가능': '진행 전',
    '신청 불가능': '진행 전',
    '대기 가능': '진행 전',
    '대회 진행전': '진행 전',
    '대회 진행중': '진행 중',
    '대회 종료': '종료',
  };

  const setCategory = (comp: Competition): Competition => {
    comp['category'] = category[comp.status];
    return comp;
  };

  const newArr = compData
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
