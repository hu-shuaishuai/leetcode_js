//两数之和
//给定一个整数数组和一个目标值，找到数组中和为目标值的两个数。
//你可以假设每个输入只对应一种答案，且同样的元素不能被重复利用。
//示例：
//给定 nums = [2, 7, 11, 15], target = 9
//因为 nums[0] + nums[1] = 2 + 7 = 9
//所以返回【0， 1】
var twoSum = function(nums, target) {
    var ans = [];
    var exist = {};
  
    for (var i = 0; i < nums.length; i++) {
      if (typeof exist[target - nums[i]] !== "undefined") {
        ans.push(exist[target - nums[i]]);
        ans.push(i);
      }
      exist[nums[i]] = i;
    }
    console.log("-------exist", exist);
    return ans;
  };
  
  var nums = [4, 6, 10, 8, 5, 1];
  
  console.log("--------twoSum", twoSum(nums, 11));
  