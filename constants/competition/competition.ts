export const GENDER: { [key: string]: string } = {
  female: '여자',
  male: '남자',
  mix: '혼성',
  null: '',
};
export const MATCH_TYPE = { single: '단식', double: '복식', team: '팀' };

export const COMP_CATEGORY = [
  { title: '전체' },
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '혼성 복식', gender: 'mix', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
];

export const COMP_TIER = {
  name: 'tier',

  options: [
    { title: '전체' },
    { title: '개나리부', value: '개나리부' },
    { title: '국화부', value: '국화부' },
    { title: '브론즈', value: '브론즈' },
    { title: '실버', value: '실버' },
  ],
};

export const COMP_STATUS = {
  name: 'status',
  defaultOption: '진행 전',
  options: [
    { title: '진행 전', value: '진행 전' },
    { title: '진행 중', value: '진행 중' },
    { title: '종료', value: '종료' },
  ],
};

export const COMP_DATA = {
  name: 'date',
  defaultOption: '대회일 가까운 순',
  options: [
    { title: '대회일 가까운 순', value: 'closest' },
    { title: '대회일 먼 순', value: 'furthest' },
  ],
};
