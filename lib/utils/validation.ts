import { zfd } from 'zod-form-data';
import { z } from 'zod';

export const formSchema = zfd.formData({
  phone: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
  password: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
  username: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
  birth: zfd.text(z.string().min(2, 'Too short').max(20, 'Too long')),
});
