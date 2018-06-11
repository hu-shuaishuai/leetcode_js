/**
 * 给定一个数组nums和一个值val,你需要原地移除所有数值等于val的元素，返沪移除后数组的新长度。
 * 不要使用额外的数组空间，你必须在原地修改输入数组并在使用O(1)额外空间的条件下完成。
 * 元素的顺序可以改变。你不需要考虑数组中超出新长度后面的元素。
 * 示例1:
 * 给定 nums = [3, 2, 2, 3], val = 3,
 * 函数应该返回新的长度2， 并且nums中的前两个元素均为2.
 * 你不需要考虑数组中超出新长度后面的元素。
 */

 var removeElement1 = function(nums, val) {
     for (var i = 0; i < nums.length; i++) {
         if (nums[i] == val) {
             console.log("-------nums", nums);
             nums.splice(i, 1)
         }
     }
     return nums;
 }

 var removeElement2 = function(nums, val) {
     while(nums.includes(val)) {
         nums.splice(nums.indexOf(val), 1);
     }
     return nums.length;
 }

 var nums = [3, 2, 2, 3]
 console.log("-----------removeElement2", removeElement2(nums, 3));
