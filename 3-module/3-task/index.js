function camelize(str) {
  let arr = str.split('-')
  .map((index, item) => index == 0 ? item : item[0].toUpperCase() + item.slice(1)
  .join(''));
  return arr;
}
