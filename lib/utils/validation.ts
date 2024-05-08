import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const signUpSchema = zfd.formData({
  phone: zfd.text(
    z
      .string()
      .regex(/^(?:01[0|1|6-9])-(?:\d{3}|\d{4})-\d{4}$/, '전화번호 형식이 아닙니다.'),
  ),
  password: zfd.text(z.string().min(4, '비밀번호가 너무 짧습니다.')),
  confirmPassword: zfd.text(z.string().min(4, '비밀번호 확인이 너무 짧습니다.')),
  username: zfd.text(z.string()),
  birth: zfd.text(
    z
      .string()
      .regex(/^(19[0-9][0-9]|20[0-9][0-9]|2100)$/, '1900 ~ 2100 사이 값을 입력해주세요.'),
  ),
});
