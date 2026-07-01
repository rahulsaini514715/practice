
class Solution {

    public static void main(String[] args) {
        Solution sol = new Solution();

        int[][] matrix = {
            {1, 3, 5, 7},
            {10, 11, 16, 20},
            {23, 30, 34, 60}
        };

        int[][] matrix2 = {
            {1, 4, 7, 11, 15},
            {2, 5, 8, 12, 19},
            {3, 6, 9, 16, 22},
            {10, 13, 14, 17, 24},
            {18, 21, 23, 26, 30}
        };

        int target = 3;
        int target2 = 5;

        // Test first method: binary search on a flattened matrix
        boolean result1 = sol.searchMatrix(matrix, target);
        System.out.println("Using binary search on flattened matrix: " + result1);

        // Test second method: staircase search from top-right
        boolean result2 = sol.searchMatrix2(matrix2, target2);

        System.out.println("Is target " + target2 + " present in matrix? " + result2);
    }

    public boolean searchMatrix(int[][] matrix, int target) {
        if (matrix.length == 0) {
            return false;
        }
        int m = matrix.length; // rows
        int n = matrix[0].length; // col
        int start = 0;
        int end = m * n - 1;

        while (start <= end) {
            int mid = start + (end - start) / 2;
            int r = mid / n;
            int c = mid % n;
            int val = matrix[r][c];
            if (val == target) {
                return true;
            } else if (target < val) {
                end = mid - 1;
            } else {
                start = mid + 1;
            }
        }
        return false;
    }

    public boolean searchMatrix2(int[][] matrix, int target) {
        if (matrix.length == 0) {
            return false;
        }
        int Rows = matrix.length;
        int Cols = matrix[0].length;
        int r = 0;
        int c = Cols - 1;
        while (r < Rows && c >= 0) {
            if (matrix[r][c] == target) {
                return true;
            } else if (target < matrix[r][c]) {
                c = c - 1;
            } else {
                r = r + 1;
            }
        }
        return false;

    }

}
