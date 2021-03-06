function hash(length) {
  var ret = '';

  if (!length) {
    length = 8;
  }

  if (window.btoa) {
    ret = btoa(Math.random()).replace(/\=+$/, '').slice(-length);
  } else {
    let str = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ1234567890',
      len = str.length;

    for (let i = 0; i < length; i++) {
      ret += str[Math.floor(Math.random() * len)];
    }
  }
  return ret;
}

export default hash;
