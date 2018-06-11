//给定一个32位有符号整数，将整数中的数字进行反转
//示例1：
//输入：123
//输出：321
//示例2:
//输入：-123
//输出：-321
//示例3:
//输入：120
//输出：21
var reverse = function(x) {
  var sign = x > 0 ? 1 : -1;
  x = Math.abs(x);
  var str = x
    .toString()
    .split("")
    .reverse()
    .join("");
  var result = sign * Number(str);
  if (result > 2147483647 || result < -2147483648) return 0;
  else return result;
};

console.log("-----------reverse", reverse(88800));
