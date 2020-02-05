// leetcode 136. 只出现一次的数字  难度简单

// 给定一个非空整数数组，除了某个元素只出现一次以外，其余每个元素均出现两次。找出那个只出现了一次的元素。

var singleNumber = function(nums) {
    nums.sort((a,b) => a-b)
    for(let i = 0;i < nums.length;i++){
        if(nums[i] != nums[i+1] && nums[i] != nums[i-1]){
            return nums[i]
        }
    }
};