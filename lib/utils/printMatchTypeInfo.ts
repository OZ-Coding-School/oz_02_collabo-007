import { GenderKey, MatchTypeKey } from '@/@types/competition';
import { GENDER, MATCH_TYPE } from '@/constants/competition';

export const printMatchTypeInfo = (
  gender: GenderKey,
  matchType: MatchTypeKey,
): string => {
  return `${GENDER[gender]} ${MATCH_TYPE[matchType]}`;
};
