import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const signInFormSchema = zfd.formData({
  phone: zfd.text(z.string({ required_error: '핸드폰 번호를 입력해주세요.' })),
  password: zfd.text(z.string({ required_error: '비밀 번호를 입력해주세요.' })),
});

export const signUpSchema = zfd.formData({
  phone: zfd.text(
    z
      .string({ required_error: '핸드폰 번호를 입력해주세요' })
      .regex(/^(?:01[0|1|6-9])\s(?:\d{4})\s\d{4}$/, '전화번호 형식이 아닙니다.'),
  ),
  password: zfd.text(
    z
      .string({ required_error: '비밀번호를 입력해주세요' })
      .min(4, '비밀번호가 너무 짧습니다.'),
  ),
  confirmPassword: zfd.text(
    z
      .string({ required_error: '비밀번호 확인을 입력해주세요' })
      .min(4, '비밀번호 확인이 너무 짧습니다.'),
  ),
  username: zfd.text(z.string({ required_error: '이름을 입력해주세요' })),
  birth: zfd.text(
    z
      .string({ required_error: '출생년도를 입력해주세요' })
      .regex(/^(19[0-9][0-9]|20[0-9][0-9]|2100)$/, '1900 ~ 2100 사이 값을 입력해주세요.'),
  ),
});

export const editSchema = zfd.formData({
  phone: zfd.text(
    z
      .string({ required_error: '핸드폰 번호를 입력해주세요' })
      .regex(/^(?:01[0|1|6-9])\s(?:\d{4})\s\d{4}$/, '전화번호 형식이 아닙니다.'),
  ),
  username: zfd.text(z.string({ required_error: '이름을 입력해주세요' })),
  birth: zfd.text(
    z
      .string({ required_error: '출생년도를 입력해주세요' })
      .regex(/^(19[0-9][0-9]|20[0-9][0-9]|2100)$/, '1900 ~ 2100 사이 값을 입력해주세요.'),
  ),
});

export const passwordSchema = zfd.formData({
  prevPassword: zfd.text(
    z
      .string({ required_error: '기존 비밀번호를 입력해주세요' })
      .min(4, '비밀번호가 너무 짧습니다.'),
  ),
  changedPassword: zfd.text(
    z
      .string({ required_error: '변경할 비밀번호를 입력해주세요' })
      .min(4, '비밀번호가 너무 짧습니다.'),
  ),
  confirmPassword: zfd.text(
    z
      .string({ required_error: '비밀번호 확인을 입력해주세요' })
      .min(4, '비밀번호 확인이 너무 짧습니다.'),
  ),
});
