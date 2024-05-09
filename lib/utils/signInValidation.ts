import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const signInFormSchema = zfd.formData({
  phone: zfd.text(
    z
      .string({ required_error: '핸드폰 번호를 입력해주세요.' })
      .min(10, '올바르지 않은 핸드폰 번호 형식입니다.'),
  ),
  password: zfd.text(
    z
      .string({ required_error: '비밀 번호를 입력해주세요.' })
      .min(4, '비밀번호는 4자리 이상입니다.'),
  ),
});
