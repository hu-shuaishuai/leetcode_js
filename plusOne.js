/**
 * 给定一个非负整数组成的非空数组。在该数的基础上加一，返回一个新的数组。
 * 最高位数字存放在数组的首位，数组中每个元素只存储一个数字。
 * 你可以假设除了整数0之外， 这个整数不会以零开头。
 * 示例1:
 * 输入：[1, 2, 3]
 * 输出：[1, 2, 4]
 * 解释：输入数组表示数字 123.
 *
 * 示例2:
 * 输入：[4, 3, 2, 1]
 * 输出：[4, 3. 2. 2]
 * 解释： 输入数组表示数字4321.
 */

var plusOne1 = function(digits) {
  var lastPlusOne = digits[digits.length - 1] + 1;
  if (lastPlusOne >= 10) {
    lastPlusOne = String(lastPlusOne).split(",");
  }
  var spliceArr = digits.splice(digits.length - 1, 1, lastPlusOne);
  return digits;
};

var plusOne2 = function(digits) {
  for (var i = digits.length - 1; i >= 0; i--) {
    if (++digits[i] > 9) digits[i] = 0;
    else return digits;
  }
  digits.unshift(1);
  return digits;
};

var digits = [1, 2, 9];
console.log("----------plusOne2", plusOne2(digits));
