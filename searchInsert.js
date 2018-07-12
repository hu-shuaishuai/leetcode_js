/**
 * 给定有一个排序数组和一个目标值，在数组中找到目标值，并返回其索引。
 * 如果目标值不存在于数组中，返回它将被会被按顺序插入的位置。可以假设数组中无重复元素
 * 示例1:
 * 输入： [1, 3, 5, 6]， 5
 * 输出： 2
 * 示例2:
 * 输入： [1, 3, 5, 6], 2
 * 输出： 1
 * 示例3：
 * 输入: [1,3,5,6], 7
 * 输出: 4
 */
var searchInsert1 = function(nums, target) {
  if (nums.indexOf(target) > -1) {
    return nums.indexOf(target);
  } else {
    var newNums = nums.concat(target);
    var arr = newNums.sort((a, b) => a - b);
    return arr.indexOf(target);
  }
};

var searchInsert2 = function(nums, target) {
  if (nums == null) {
    return -1;
  }
  var left = 0;
  var right = nums.length - 1;
  while (left <= right) {
    mid = Math.floor((left + right) / 2);
    if (nums[mid] === target) {
      return mid;
    } else if (target < nums[mid]) {
      right = right - 1;
    } else {
      left = mid + 1;
    }
  }
  return left;
};

var nums = [3, 5, 7, 9, 10];
var target = 8;

console.log("---------searchInsert2", searchInsert2(nums, target));
