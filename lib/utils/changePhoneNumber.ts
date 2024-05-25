export const changePhoneNumber = (phone: string) => {
  return phone
    .replace(/[^0-9]/g, '')
    .replace(/^(\d{0,3})(\d{0,4})(\d{0,4})$/g, '$1 $2 $3')
    .replace(/^\s+|\s+$/g, '');
};
