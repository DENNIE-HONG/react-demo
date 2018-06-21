const test = (config) => Object.keys(config).reduce((copy, name) => {
  console.log(111);
  copy[name] = config[name];
  console.log(copy);
  return copy;
});
export default((config) => test(config))({
  'getUserList': 'https://www.jianshu.com/notes/9739254/included_collections?page=1'
});
