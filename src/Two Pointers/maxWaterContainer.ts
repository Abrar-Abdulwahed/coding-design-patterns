//!https://leetcode.com/problems/container-with-most-water/
function maxArea(height: number[]): number {
    let left = 0, right = height.length - 1;
    let maxArea = 0;
    while(left < right){
        const width = right - left;
        const currArea = Math.min(height[right], height[left]) * width;
        maxArea = Math.max(maxArea, currArea);
        if(height[left] < height[right]) left++
        else right --;
    }
    return maxArea;
};

console.log(maxArea([1,8,6,2,5,4,8,3,7]))