
class Solution {

    public static void main(String[] args) {
        // Example usage:
        int[] nums = {3, 0, 1};
        Solution solution = new Solution();
        int missingNumber = solution.missingNumber(nums);
        System.out.println("Missing number is: " + missingNumber);
    }

    public int missingNumber(int[] nums) {

        int n = nums.length;
        int expectedSum = n * (n + 1) / 2;
        int actualSum = 0;
        for (int i = 0; i < n; i++) {
            actualSum += nums[i];
        }

        return expectedSum - actualSum;

    }
}
