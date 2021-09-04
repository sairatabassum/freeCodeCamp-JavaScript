function titleCase(str) {
  return str
    .toLowerCase()
    .split(' ')
    .map(x => x[0].toUpperCase() + x.slice(1))
    .join(' ');
}

console.log(titleCase("I'm a little tea pot"));
