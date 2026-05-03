
public class BinarySearch4 {

    public static void main(String args[]) {
        // int arr[] = {2, 4, 5, 7, 11, 66};
        // int index = minElement(arr);
        // System.out.println(arr[index]);
        // int index1 = maxElement(arr);
        // System.out.println(arr[index1]);
        // int index2 = searchInRotatedArray(arr, 66);
        // if (index2 == -1) {
        //     System.out.println("searchInRotatedArray : Element does not exist");
        // } else {
        //     System.out.println(arr[index2]);
        // }
        // rotationCountInCWSA(arr);
        // rotationCountInACWSA(arr);

//--------------------------------------------------------------------------------------
        // chatGPt Main Method start
        int[] arr = {15, 18, 2, 3, 6, 12}; // Rotated sorted array
        int target = 3;

        // Rotation count
        rotationCountInCWSA(arr);   // Clockwise rotation
        rotationCountInACWSA(arr);  // Anti-clockwise rotation

        // Search for a target
        int index = searchInRotatedArray(arr, target);
        System.out.println("Target " + target + " found at index: " + index);

        // Minimum and Maximum element index
        int minIdx = minElement(arr);
        System.out.println("Index of minimum element: " + minIdx + ", Value: " + arr[minIdx]);

        int maxIdx = maxElement(arr);
        System.out.println("Index of maximum element: " + maxIdx + ", Value: " + arr[maxIdx]);

        // Array with duplicates
        int[] arrWithDuplicates = {3, 3, 3, 3, 4, 3};
        int minWithDupIdx = minElementDuplicates(arrWithDuplicates);
        System.out.println("Index of minimum element (with duplicates): " + minWithDupIdx + ", Value: " + arrWithDuplicates[minWithDupIdx]);
        // chatGPt Main Method End
        // Example array: rotated version of a sorted array

        int[] arr1 = {6, 5, 1, 2, 3, 4};

        int k = findKRotation(arr1);

        System.out.println("The array is right-rotated " + k + " times.");
    }

    static void rotationCountInACWSA(int arr[]) {
        int index = minElement(arr);
        System.out.println("ACW Rotation count is:" + ((arr.length - index) % arr.length));
    }

    static void rotationCountInCWSA(int arr[]) {
        int index = minElement(arr);
        System.out.println("CW Rotation count is:" + index);
    }

    static int searchInRotatedArray(int arr[], int target) {
        int start = 0;
        int end = arr.length - 1;
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (target == arr[mid]) {
                return mid;
            }
            // left side is sorted
            if (arr[start] <= arr[mid]) {
                // can ans be found in left side?
                if (target >= arr[start] && target < arr[mid]) {
                    end = mid - 1;
                } else {
                    start = mid + 1;
                }
            } // right side is sorted
            else {
                // can ans be found in right side?
                if (target > arr[mid] && target <= arr[end]) {
                    start = mid + 1;
                } else {
                    end = mid - 1;
                }
            }
        }
        return ans;
    }

    static int maxElement(int arr[]) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (mid < arr.length - 1 && arr[mid] > arr[mid + 1]) {
                return mid;
            } // if right half is sorted, move left
            else if (arr[start] > arr[mid]) {
                end = mid - 1;
            } // if left half is sorted, move right
            else {
                start = mid + 1;
            }
        }
        return end;
    }

    static int minElement(int arr[]) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (mid > 0 && arr[mid] < arr[mid - 1]) {
                return mid;
            } // if right half is sorted, move left
            else if (arr[end] > arr[mid]) {
                end = mid - 1;
            } // if left half is sorted, move right
            else {
                start = mid + 1;
            }
        }
        return start;
    }

    static int minElementDuplicates(int arr[]) {
        int start = 0;
        int end = arr.length - 1;
        while (start < end) {
            int mid = start + (end - start) / 2;
            if (arr[start] == arr[mid] && arr[mid] == arr[end]) {
                start++;
                end--;
            } else if (mid > 0 && arr[mid] < arr[mid - 1]) {
                return mid;
            } // if right half is sorted, move left
            else if (arr[end] >= arr[mid]) {
                end = mid - 1;
            } // if left half is sorted, move right
            else {
                start = mid + 1;
            }
        }
        return start;
    }

    // Static method that works with an integer array
    public static int findKRotation(int[] arr) {
        int n = arr.length;
        int start = 0, end = n - 1;

        // If array is already sorted, no rotation
        if (arr[start] <= arr[end]) {
            return 0;
        }

        // Binary search to find the pivot (minimum element index)
        while (start <= end) {
            int mid = start + (end - start) / 2;
            int prev = (mid - 1 + n) % n;
            int next = (mid + 1) % n;

            // Check if mid is the minimum element (pivot)
            if (arr[mid] <= arr[prev] && arr[mid] <= arr[next]) {
                return mid;
            }

            // If left half is sorted, move to right half
            if (arr[start] <= arr[mid]) {
                start = mid + 1;
            } // Else, move to left half
            else {
                end = mid - 1;
            }
        }

        return 0; // fallback
    }

}
