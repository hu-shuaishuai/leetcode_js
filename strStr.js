/**
 * 实现strStr()函数
 * 给定一个haystack字符串和一饿needle字符串，在haystack字符串中找出needle字符串
 * 出现的第一个位置(从0开始)。如果不存在，则返回-1.
 * 示例1:
 * 输入：haystack = 'hello', needle = 'll'
 * 输出： 2
 * 示例2:
 * 输入：haystack = 'aaaaa', needle = 'bba'
 * 输出：-1
 */
var strStr1 = function(haystack, needle) {
  return haystack.indexOf(needle);
};

var strStr2 = function(haystack, needle) {
    var hlen = haystack.length;
    var nlen = needle.length;
    console.log("-----hlen", hlen);
    console.log("-----nlen", nlen);

    for (var i = 0; i < hlen - nlen + 1; i++) {
        var substr = haystack.substr(i, nlen);
        console.log("-----substr", substr);
        if (substr.valueOf() === needle.valueOf()) {
            return i;
        }

    }
    return -1;
}

console.log("-------strStr2", strStr2("hello", "ll"));
