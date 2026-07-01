
import java.util.*;

public class Solution {

    public static void main(String[] args) {
        Solution solution = new Solution();

        // Test spiralMatrix1
        int[][] inputMatrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        List<Integer> spiralOrder = solution.spiralMatrix1(inputMatrix);
        System.out.println("spiralMatrix1 Output: " + spiralOrder);
        // Expected: [1, 2, 3, 6, 9, 8, 7, 4, 5]

        // Test spiralMatrix2
        int n = 3;
        int[][] spiralFilledMatrix = solution.spiralMatrix2(n);
        System.out.println("spiralMatrix2 Output:");
        for (int[] row : spiralFilledMatrix) {
            System.out.println(Arrays.toString(row));
        }
        // Expected: 
        // [1, 2, 3]
        // [8, 9, 4]
        // [7, 6, 5]
    }

    public List<Integer> spiralMatrix1(int[][] matrix) {
        List<Integer> result = new ArrayList<>();
        int n = matrix.length;
        int m = matrix[0].length;
        int startRow = 0;
        int endRow = n - 1;
        int startCol = 0;
        int endCol = m - 1;

        while (startRow <= endRow && startCol <= endCol) {
            // first Row
            for (int j = startCol; j <= endCol; j++) {
                result.add(matrix[startRow][j]);
            }
            startRow += 1;
            // end Col
            for (int i = startRow; i <= endRow; i++) {
                result.add(matrix[i][endCol]);
            }
            endCol -= 1;
            if (startRow <= endRow) {
                // last Row
                for (int j = endCol; j >= startCol; j--) {
                    result.add(matrix[endRow][j]);
                }
                endRow -= 1;
            }
            if (startCol <= endCol) {
                // first Col
                for (int i = endRow; i >= startRow; i--) {
                    result.add(matrix[i][startCol]);
                }
                startCol += 1;
            }
        }
        return result;
    }

    public int[][] spiralMatrix2(int n) {
        int matrix[][] = new int[n][n];
        int startRow = 0;
        int endRow = n - 1;
        int startCol = 0;
        int endCol = n - 1;
        int val = 1;
        while (startRow <= endRow && startCol <= endCol) {
            // fill first Row
            for (int j = startCol; j <= endCol; j++) {
                matrix[startRow][j] = val;
                val += 1;
            }
            startRow += 1;
            // fill end Col
            for (int i = startRow; i <= endRow; i++) {
                matrix[i][endCol] = val;
                val += 1;
            }
            endCol -= 1;
            if (startRow <= endRow) {
                // fill last Row
                for (int j = endCol; j >= startCol; j--) {
                    matrix[endRow][j] = val;
                    val += 1;
                }
                endRow -= 1;
            }
            if (startCol <= endCol) {
                // fill first Col
                for (int i = endRow; i >= startRow; i--) {
                    matrix[i][startCol] = val;
                    val += 1;
                }
                startCol += 1;
            }
        }
        return matrix;
    }
}
