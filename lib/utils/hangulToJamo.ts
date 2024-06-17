const CHO_HANGUL: string[] = [
  'ㄱ',
  'ㄲ',
  'ㄴ',
  'ㄷ',
  'ㄸ',
  'ㄹ',
  'ㅁ',
  'ㅂ',
  'ㅃ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅉ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

const JUNG_HANGUL: string[] = [
  'ㅏ',
  'ㅐ',
  'ㅑ',
  'ㅒ',
  'ㅓ',
  'ㅔ',
  'ㅕ',
  'ㅖ',
  'ㅗ',
  'ㅘ',
  'ㅙ',
  'ㅚ',
  'ㅛ',
  'ㅜ',
  'ㅝ',
  'ㅞ',
  'ㅟ',
  'ㅠ',
  'ㅡ',
  'ㅢ',
  'ㅣ',
];

const JONG_HANGUL: string[] = [
  '',
  'ㄱ',
  'ㄲ',
  'ㄳ',
  'ㄴ',
  'ㄵ',
  'ㄶ',
  'ㄷ',
  'ㄹ',
  'ㄺ',
  'ㄻ',
  'ㄼ',
  'ㄽ',
  'ㄾ',
  'ㄿ',
  'ㅀ',
  'ㅁ',
  'ㅂ',
  'ㅄ',
  'ㅅ',
  'ㅆ',
  'ㅇ',
  'ㅈ',
  'ㅊ',
  'ㅋ',
  'ㅌ',
  'ㅍ',
  'ㅎ',
];

const CHO_PERIOD = 588; // 28 * 21
const JUNG_PERIOD = 28;

const HANGUL_START_CHARCODE = '가'.charCodeAt(0);
const HANGUL_END_CHARCODE = '힣'.charCodeAt(0);

function isHangul(charCode: number): boolean {
  return HANGUL_START_CHARCODE <= charCode && charCode <= HANGUL_END_CHARCODE;
}

function divideHangul(
  letter: string,
): { cho: string; jung: string; jong: string } | string {
  const letterCode = letter.charCodeAt(0);

  if (!isHangul(letterCode)) {
    return letter;
  }

  const charCode = letterCode - HANGUL_START_CHARCODE;

  const choIndex = Math.floor(charCode / CHO_PERIOD);
  const jungIndex = Math.floor((charCode % CHO_PERIOD) / JUNG_PERIOD);
  const jongIndex = charCode % JUNG_PERIOD;

  return {
    cho: CHO_HANGUL[choIndex],
    jung: JUNG_HANGUL[jungIndex],
    jong: JONG_HANGUL[jongIndex],
  };
}

function combine(cho: number, jung: number, jong: number): string {
  const hangulCode = HANGUL_START_CHARCODE + cho * CHO_PERIOD + jung * JUNG_PERIOD + jong;

  if (!isHangul(hangulCode)) {
    return '';
  }

  return String.fromCharCode(hangulCode);
}

function combineHangul(cho: string = '', jung: string = '', jong: string = ''): string {
  const choIndex = CHO_HANGUL.indexOf(cho);
  const jungIndex = JUNG_HANGUL.indexOf(jung);
  const jongIndex = JONG_HANGUL.indexOf(jong);

  return combine(choIndex, jungIndex, jongIndex);
}

export const hangulToJamo = (text: string): string => {
  return Array.from(text)
    .map((char: string) => {
      const divided = divideHangul(char);
      if (typeof divided === 'object') {
        return [divided.cho, divided.jung, divided.jong].join('');
      }
      return char;
    })
    .join('');
};
