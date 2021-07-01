function getSecondLargest(nums) {
  // Complete the function
  let first = nums[0];
  let second = -1;

  for (let i = 1; i < nums.length; i++) {
    if (nums[i] > first) {
      second = first;
      first = nums[i];
    }

    if (nums[i] > second && nums[i] < first) {
      second = nums[i];
    }
  }

  return second;
}

// 더 간단한 방법

function getSecondLargest(nums) {
  var sorted_array = nums.sort(function (a, b) {
    return a - b;
  });
  var unique_sorted_array = sorted_array.filter(function (elem, index, self) {
    return index === self.indexOf(elem);
  });

  return unique_sorted_array[unique_sorted_array.length - 2];
}

function getSecondLargest(nums) {
  const max = Math.max(...nums);
  return Math.max(...nums.filter((x) => x !== max));
}
