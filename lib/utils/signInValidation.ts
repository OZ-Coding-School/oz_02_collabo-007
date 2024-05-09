import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const signInFormSchema = zfd.formData({
  phone: zfd.text(
    z
      .string({ required_error: '핸드폰 번호를 입력해주세요.' })
      .regex(
        /^(?:01[0|1|6-9])-(?:\d{3}|\d{4})-\d{4}$/,
        '올바른 핸드폰 번호 형식이 아닙니다.',
      ),
  ),
  password: zfd.text(
    z
      .string({ required_error: '비밀 번호를 입력해주세요.' })
      .min(4, '비밀번호는 4자리 이상입니다.'),
  ),
});
