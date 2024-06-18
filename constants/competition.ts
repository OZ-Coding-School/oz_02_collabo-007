import {
  CompCategory,
  CompStatusButtonContentItem,
  CompStatusButtonContentKey,
} from '@/@types/competition';

export const GENDER = {
  female: '여자',
  male: '남자',
  mix: '혼성',
} as const;

export const MATCH_TYPE = {
  single: '단식',
  double: '복식',
  team: '팀',
} as const;

export const COMP_CATEGORY: CompCategory[] = [
  { title: '전체', gender: 'all', type: 'all' },
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '혼성 복식', gender: 'mix', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
];

export const RANKING_CATEGORY: CompCategory[] = [
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
];

export const COMP_TIER = {
  name: 'tier',
  options: [
    { title: '전체', value: '' },
    { title: '개나리부', value: '개나리부' },
    { title: '국화부', value: '국화부' },
    { title: '브론즈', value: '브론즈' },
    { title: '실버', value: '실버' },
  ],
} as const;

export const COMP_STATUS = {
  name: 'status',
  options: [
    { title: '진행 전', value: 'before' },
    { title: '진행 중', value: 'during' },
    { title: '종료', value: 'ended' },
  ],
} as const;

export const COMP_DATA = {
  name: 'date',
  options: [
    { title: '대회일 가까운 순', value: 'closest' },
    { title: '대회일 먼 순', value: 'furthest' },
  ],
} as const;

export const COMP_STATUS_BUTTON_CONTENT: Record<
  CompStatusButtonContentKey,
  CompStatusButtonContentItem
> = {
  'Registration Available': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  'Registration Unavailable': {
    label: '신청 불가 (성별 또는 실력 제한)',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  'Registration Confirmed': {
    label: '참가 신청 조회',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'success',
  },
  'Waitlist Available': {
    label: '대기 신청하기',
    variant: 'tertiary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  during: {
    label: '대회 현황 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'progress',
  },
  ended: {
    label: '대회 결과 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'result',
  },
} as const;

export const COMP_LIST_OPTIONS = [
  { title: '전체', status: 'all' },
  { title: '진행 전', status: 'before' },
  { title: '진행 중', status: 'during' },
  { title: '종료', status: 'ended' },
] as const;

export const MY_COMP_LIST: { title: string; link: string }[] = [
  { title: '참가 예정 대회', link: '/mypage/competition/?status=before' },
  { title: '참가 중인 대회', link: '/mypage/competition/?status=during' },
  { title: '최근 참가 대회', link: '/mypage/competition/?status=ended' },
] as const;

export const BEFORE = 'before';
export const DURING = 'during';
export const ENDED = 'ended';
