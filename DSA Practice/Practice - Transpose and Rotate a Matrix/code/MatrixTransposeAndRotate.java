
public class MatrixTransposeAndRotate {

    public static void main(String[] args) {
        int N = 4;
        int[][] mat = {
            {1, 1, 1, 1},
            {2, 2, 2, 2},
            {3, 3, 3, 3},
            {4, 4, 4, 4}
        };

        System.out.println("Original Matrix:");
        printMatrix(mat);

        // Rotate matrix clockwise by 90 degrees
        rotateby90(mat, N);

        System.out.println("\nMatrix after rotating clockwise by 90 degrees:");
        printMatrix(mat);

        int[][] matrix2 = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };
        System.out.println("Original Matrix:");
        printMatrix(matrix2);

        // Call non-static rotate method for anticlockwise rotation
        MatrixTransposeAndRotate obj = new MatrixTransposeAndRotate();
        obj.rotate(matrix2);

        System.out.println("\nMatrix after rotating anti-clockwise by 90 degrees:");
        printMatrix(matrix2);

        int[][] matrix = {
            {1, 2, 3},
            {4, 5, 6},
            {7, 8, 9}
        };

        int n = 3;

        System.out.println("Original Matrix:");
        printMatrix(matrix);

        rotateby90(matrix, n);  // Clockwise rotation

        System.out.println("\nRotated Matrix:");
        printMatrix(matrix);

    }
    // clockwise

    static void rotateby90(int matrix[][], int n) {
        transpose(matrix, n);
        for (int i = 0; i < n / 2; i++) {
            for (int j = 0; j < n; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[n - 1 - i][j];
                matrix[n - 1 - i][j] = temp;
            }
        }

    }
//anticlockwise

    public void rotate(int[][] matrix) {
        int n = matrix.length;
        transpose(matrix, n);
        // reverse rows.
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < n / 2; j++) {
                int temp = matrix[i][j];
                matrix[i][j] = matrix[i][n - 1 - j];
                matrix[i][n - 1 - j] = temp;
            }
        }
    }

    static void swap(int matrix[][], int i, int j) {
        int temp = matrix[i][j];
        matrix[i][j] = matrix[j][i];
        matrix[j][i] = temp;
    }

    static void transpose(int matrix[][], int n) {
        // code here
        for (int i = 0; i < n; i++) {
            for (int j = 0; j < i; j++) {
                swap(matrix, i, j);
            }
        }
    }

    // Added only this print method
    static void printMatrix(int[][] matrix) {
        for (int[] row : matrix) {
            for (int val : row) {
                System.out.print(val + " ");
            }
            System.out.println();
        }
    }
}
