// isValidNumber
// "12345" -> True
// "a1b2c3" -> False
// "-5.0" -> True

/*
"123"
"123.4545"
"1"
"-2"
" 22"
"23." => false
".23" => false
"123.23" => true
"123.3-"
"12-"
""
*/
/*
let isNumBeforeSeen
let isPointSeen
let isNumAfterSeen
*/

function isValidNumber(str) {
  if (!str) {
    return false;
  }
  let isNumBeforePtSeen = false;
  let isPointSeen = false;
  let isNumAfterPtSeen = false;
  let isSignSeen = false;
  for (let i = 0; i < str.length; i++) {
    if (/[0-9]+/.test(str[i])) {
      if (isPointSeen) {
        isNumAfterPtSeen = true;
      } else {
        isNumBeforePtSeen = true;
      }
    } else if (str[i] === '.') {
      if (isPointSeen || !isNumBeforePtSeen) {
        return false;
      }
      isPointSeen = true;
    } else if (str[i] === '-' || str[i] === '+') {
      if (isSignSeen || isPointSeen || isNumBeforePtSeen) {
        return false;
      }
      isSignSeen = true;
    } else if (str[i] === ' ') {
      continue;
    } else {
      return false;
    }
  }
  return isPointSeen ? isNumAfterPtSeen : true;
}




// intToEnglish
// 123 -> "One Hundred Twenty Three"
// 5600413 -> "Five Million Six Hundred Thousand Four Hundred Thirteen"
/*
"3 456 789" => ""
["Million", "Thousand", ""]

789 + ""
456 + "Thousand"
3 + "Million"
*/

function intToEnglish(number) {
  const units = ['', 'Thousand', 'Million', 'Billion'];
  const output = [];
  let num = number;
  for (const unit of units) {
    const result.length = helper(num % 1000);
    if (result.length) {
      output.unshift(unit);
      output.unshift(...result);
    }
    num = Math.floor(num / 1000);
  }
  return output.join(' ');
}

const map = {};

/*
31
30
123
*/

function helper(number) {
  if (number <= 20) {
    return [map[number]];
  }
  const output = [];
  if (number < 100) {
    const r = number % 10;
    if (r > 0) {
      output.unshift(map[r]);
    }
    output.unshift(map[Math.floor(number / 10) * 10]);
    return output;
  }
  const r = number % 100;
  if (r > 0) {
    output.unshift(...helper(r));
  }
  output.unshift(Math.floor(number / 100), 'Hundred');
  return output;
}
