export const hangulToJamo = (text: string): string => {
  return Array.from(text)
    .map((char: string) => {
      if (/^[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]$/.test(char)) {
        const code: number = char.charCodeAt(0) - 44032;
        let chosungIndex: number = Math.floor(code / 588);
        const jungsungIndex: number = Math.floor((code - chosungIndex * 588) / 28);
        const jongsungIndex: number = Math.floor(
          code - chosungIndex * 588 - jungsungIndex * 28,
        );
        const chosung: string = [
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
        ][chosungIndex];
        const jungsung: string = [
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
        ][jungsungIndex];
        let jongsung: string = '';
        if (jongsungIndex !== 0) {
          jongsung = [
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
          ][jongsungIndex];
        }
        return [chosung, jungsung, jongsung].join('');
      }
      return char;
    })
    .join('');
};
