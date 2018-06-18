let sortByString = (s, t) => {
  let hash = {};
  let sorted = '';

  for (let letter of s) {
    if (hash[letter] ? hash[letter]++ : hash[letter] = 1);
  }

  for (let letter of t) {
    if (hash[letter]) {
      sorted += letter.repeat(hash[letter]);
    }
  }

  return sorted;
}
