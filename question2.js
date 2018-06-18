let decodeString = (s) => {
  let numRepeat = [];
  let letterRepeat = [];
  let temp = "";
  let finalStr = "";

  for (let i = 0; i < s.length; i++) {
    if (!isNaN(s[i])) {
      let bracketIdx = s.indexOf("[", i);
      let numSlice = s.slice(i, bracketIdx);
      numRepeat.push(parseInt(numSlice));
      i = bracketIdx;
      i--;
    } else if (s.charAt(i) === ']') {
      temp = "";
      let count = 0;

      if (numRepeat.length !== 0) {
        count = numRepeat.pop();
      }

      while (letterRepeat.length !== 0 && letterRepeat[letterRepeat.length - 1] !== '[') {
        temp = letterRepeat.pop() + temp;
      }

      if (letterRepeat.length !== 0 && letterRepeat[letterRepeat.length - 1] == '[') {
        letterRepeat.pop();
      }

      for (let j = 0; j < count; j++) {
        finalStr = finalStr + temp;
      }

      for (let j = 0; j < finalStr.length; j++) {
        letterRepeat.push(finalStr.charAt(j));
      }
      finalStr = '';
    } else {
      letterRepeat.push(s.charAt(i));
    }
  }

  while (letterRepeat.length !== 0) {
    finalStr = letterRepeat[letterRepeat.length - 1] + finalStr;
    letterRepeat.pop();
  }
  return finalStr;
}
