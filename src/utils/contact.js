// Contact details are built at runtime from char codes so plain-text
// scrapers/crawlers can't find a literal email or phone in the source.
// (Determined attackers running JS could still recover them — this defeats
// the 99% of spam bots that regex-scan raw HTML/JS.)

const E = [
  107, 114, 97, 105, 108, 121, 110, 100, 64, 118, 105, 118, 97, 108, 100,
  105, 46, 110, 101, 116,
];
const P = [43, 53, 49, 32, 57, 48, 55, 32, 49, 54, 51, 32, 52, 57, 56];
const T = [43, 53, 49, 57, 48, 55, 49, 54, 51, 52, 57, 56];

export const getEmail = () => String.fromCharCode(...E);
export const getPhone = () => String.fromCharCode(...P);
export const getMailto = () => `mailto:${getEmail()}`;
export const getTel = () => `tel:${String.fromCharCode(...T)}`;
