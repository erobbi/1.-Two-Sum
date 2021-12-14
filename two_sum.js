var twoSum = function(nums, target) {
    let obj = {};
    for (let i=0; i<nums.length; i++) {
        let cur = nums[i];
        // look for the complement in the hash table
        // cur + x = target
        let x = target - cur;
        if (obj[x] !== undefined) {
            return [obj[x], i]
        }
        obj[cur] = i;
    }
};
