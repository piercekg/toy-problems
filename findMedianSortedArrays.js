var findMedianSortedArrays = function(nums1, nums2) {
  var merged = nums1.concat(nums2).sort(function(a, b) {
    return a - b;
  });
  var mid = Math.floor(merged.length / 2);
  if (merged.length % 2 === 1) {
    return merged[mid];
  }
  return (merged[mid] + merged[mid - 1]) / 2;
};

/*
var result = findMedianSortedArrays([2,4,3], [5,6]);
console.log(result);
*/