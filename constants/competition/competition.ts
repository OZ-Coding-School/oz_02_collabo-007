import { CompStatusButtonContent } from '@/@types/competition';

export const GENDER: { [key: string]: string } = {
  female: '여자',
  male: '남자',
  mix: '혼성',
  null: '',
} as const;
export const MATCH_TYPE = { single: '단식', double: '복식', team: '팀' } as const;

export const COMP_CATEGORY = [
  { title: '전체' },
  { title: '남자 단식', gender: 'male', type: 'single' },
  { title: '여자 단식', gender: 'female', type: 'single' },
  { title: '남자 복식', gender: 'male', type: 'double' },
  { title: '여자 복식', gender: 'female', type: 'double' },
  { title: '혼성 복식', gender: 'mix', type: 'double' },
  { title: '팀', gender: 'team', type: 'team' },
] as const;

export const COMP_TIER = {
  name: 'tier',
  options: [
    { title: '전체' },
    { title: '개나리부', value: '개나리부' },
    { title: '국화부', value: '국화부' },
    { title: '브론즈', value: '브론즈' },
    { title: '실버', value: '실버' },
  ],
} as const;

export const COMP_STATUS = {
  name: 'status',
  defaultOption: '진행 전',
  options: [
    { title: '진행 전', value: '진행 전' },
    { title: '진행 중', value: '진행 중' },
    { title: '종료', value: '종료' },
  ],
} as const;

export const COMP_DATA = {
  name: 'date',
  defaultOption: '대회일 가까운 순',
  options: [
    { title: '대회일 가까운 순', value: 'closest' },
    { title: '대회일 먼 순', value: 'furthest' },
  ],
} as const;

export const COMP_STATUS_BUTTON_CONTENT: CompStatusButtonContent = {
  '신청 가능': {
    label: '대회 신청하기',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '신청 불가능': {
    label: '신청 불가 (성별 또는 실력 제한)',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '신청 완료': {
    label: '참가 신청 조회',
    variant: 'primary',
    size: 'md',
    colors: 'default',
    endPoint: 'success',
  },
  '대기 가능': {
    label: '대기 신청하기',
    variant: 'tertiary',
    size: 'md',
    colors: 'default',
    endPoint: 'apply',
  },
  '대회 진행중': {
    label: '대회 현황 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'progress',
  },
  '대회 종료': {
    label: '대회 결과 보기',
    variant: 'tertiary',
    size: 'md',
    colors: 'gray',
    endPoint: 'result',
  },
} as const;

export const COMPLIST_OPTIONS = [
  { title: '전체' },
  { title: '진행 전' },
  { title: '진행 중' },
  { title: '종료' },
] as const;

export const HOME_COMP_LIST = [
  { title: '참가 예정 대회' },
  { title: '최근 참가 대회' },
] as const;

export const COMP_LIST_SECTION_LINK: { [key: string]: string } = {
  '참가 예정 대회': '/mypage/competition/?status=진행 전',
  '최근 참가 대회': '/mypage/competition/?status=종료',
  '대회 정보': '/competition/?status=진행 전',
} as const;
