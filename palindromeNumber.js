//判断一个整数是否是回文，回文数是指正序（从左向右）和倒序（从右到左）读都是一样的整数
//示例1:
//输入： 121
//输出： true
//示例2:
//输入：-121
//输出：false
//解释： 从左向右读，为-121.从右向左读，为121-。因此它不是一个回文数
//示例3:
//输入：10
//输出：false
//解释：从右向左读，为01，因此它不是一个回文数。 
var isPalindrome = function(x) {
    return x == x.toString().split('').reverse().join('')
}

var x = 5678;
console.log("----------isPalindrome", isPalindrome(x));