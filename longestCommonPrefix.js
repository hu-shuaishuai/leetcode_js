var longestCommonPrefix1 = function(strs) {
  if (strs == null || strs.length == 0) return "";
  var result = "";
  for (var i = 0; i < strs.length; i++) {
    if (
      strs.every(function(item) {
        return strs[i][i] == item[i];
      })
    ) {
      result += strs[i][i];
    } else {
      break;
    }
  }
  return result;
};

var strs = ["hello", "hei", "hhhhh"];

var longestCommonPrefix2 = function(strs) {
  if (strs == null || strs.length == 0) return "";
  var same = strs[0];
  for (var i = 1; i < strs.length; i++) {
    var str = strs[i];
    for (var j = 0; j < same.length; j++) {
      if (same[j] != str[j]) {
        break;
      }
    }
    same = same.slice(0, j);
  }
  return same;
};

console.log("-----------longestCommonPrefix2", longestCommonPrefix2(strs));
