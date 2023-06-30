export function validateEmail(string) {
  return /@/.test(string) && /\.[a-z]{2,3}$/.test(string);
}
