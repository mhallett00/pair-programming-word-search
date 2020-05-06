const wordSearch = (letters, word) => {
  if (letters.length) {
    const horizontalJoin = letters.map(ls => ls.join(''));
    const verticalJoin = transpose(letters).map(ls => ls.join(''));
    console.log(horizontalJoin, verticalJoin);
    const orientation = [horizontalJoin, verticalJoin];
    for (const each of orientation) {
      for (const l of each) {
        console.log(l);
        if (l.includes(word)) {
          return true;
        }
      }
    }
  }
  return false;
};

const transpose = function(search) {
  const finalSearch = [];
  for (let x = 0; x < search[0].length; x++) {
    const newSearch = [];
    for (let y = 0; y < search.length; y++) {
      newSearch.push(search[y][x]);
    }
    finalSearch.push(newSearch);
  }
  return finalSearch;
};




module.exports = wordSearch;