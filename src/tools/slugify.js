export default function (string = '') {
  return string.toLowerCase().replace(/\W/g, '-');
}
