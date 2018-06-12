/**
 * 最长公共前缀
 * 编写一个函数来查找字符串数组中的最长公共前缀。
 * 如果不存在公共前缀，返回空字符串"".
 * 示例1:
 * 输入：['flower', 'flow', 'flight']
 * 输出：‘fl’
 * 示例2:
 * 输入：['dog', 'rancecar', 'car']
 * 输出：""
 * 说明：所有输入只包含小写字母
 *
 * 解法一：
 */
var longestCommonPrefix1 = function(strs) {
  if (strs.length == 0) return "";
  var result = "";
  for (var i = 0; i < strs[0].length; i++) {
    if (
      strs.every(function(item) {
        return strs[0][i] === item[i];
      })
    ) {
      result += strs[0][i];
    } else {
      break;
    }
  }
  return result;
};

var strs = ["flower", "flow", "flight"];

//解法二：
var longestCommonPrefix2 = function(strs) {
  if (strs == null || strs.length === 0) return "";
  var same = strs[0];
  for (var i = 1; i < strs.length; i++) {
    for (var j = 0; j < same.length; j++) {
      if (same[j] != strs[i][j]) {
        break;
      }
    }
    same = same.slice(0, j);
  }
  return same;
};

console.log("----------longestCommonPrefix2", longestCommonPrefix(strs));
