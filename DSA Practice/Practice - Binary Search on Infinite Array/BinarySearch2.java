
public class BinarySearch2 {

    public static void main(String[] args) {
        int arr[] = {2, 2, 4, 5, 7, 9, 10, 25, 56, 88, 94};
        int arr1[] = {0, 0, 0, 0, 0, 1, 1, 1, 1, 1, 3, 4, 5, 5, 5, 5, 5};
        int arr2[] = {0, 0, 1, 2, 2, 3, 5, 6, 8, 9, 11, 13, 22};
        findMinimumAbsoluteDifference(arr, 15);
        findElementInInfiniteSortedArray(arr, 10);

        findFirstOneInaBinaryInfiniteSortedArray(arr1);
        findFirstOneInaBinaryInfiniteSortedArray(arr2);

    }

    // find index of peak element and do + 1
    static void findFirstOneInaBinaryInfiniteSortedArray(int arr[]) {
        int range[] = findRangeInInfiniteArray(arr, 5);
        int ans = binarySearchFirstOccurrence(arr, 5, range[0], range[1]);
        if (ans == -1) {
            System.out.println("findFirstOneInaBinaryInfiniteSortedArray : Element does not exist");
        } else {
            System.out.println("findFirstOneInaBinaryInfiniteSortedArray : Found element at index :" + ans);
        }
    }

    static void findElementInInfiniteSortedArray(int arr[], int target) {
        int range[] = findRangeInInfiniteArray(arr, 10);
        int ans = binarySearchInRange(arr, 10, range[0], range[1]);
        if (ans == -1) {
            System.out.println("findElementInInfiniteSortedArray : Element does not exist");
        } else {
            System.out.println("findElementInInfiniteSortedArray : Found element at index :" + ans);
        }
    }

    static int[] findRangeInInfiniteArray(int arr[], int target) {
        int range[] = new int[2];

        int start = 0;
        int end = 1;

        while (arr[end] < target) {
            start = end;
            end = 2 * end;
        }
        range[0] = start;
        range[1] = end;

        return range;
    }

    static void findMinimumAbsoluteDifference(int arr[], int target) {

        if (arr.length == 0) {
            return;
        }

        int ans = -1;
        int start = 0;
        int end = arr.length - 1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                ans = mid;
                break;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }

        // if element exists then ans will be zero
        int res = 0;

        // element does not exists
        if (ans == -1) {
            if (end == -1) {
                res = Math.abs(target - arr[start]);
            } else if (start == arr.length) {
                res = Math.abs(target - arr[end]);
            } else {
                int ans1 = Math.abs(target - arr[start]);
                int ans2 = Math.abs(target - arr[end]);
                res = (ans1 < ans2) ? ans1 : ans2;
            }
        }
        System.out.println("Minimum Absolute difference is :" + res);
    }

    static int binarySearchInRange(int arr[], int target, int start, int end) {
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                ans = mid;
                break;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }

    static int binarySearchFirstOccurrence(int arr[], int target, int start, int end) {
        int ans = -1;
        while (start <= end) {
            int mid = start + (end - start) / 2;
            if (arr[mid] == target) {
                ans = mid;
                end = mid - 1;
            } else if (arr[mid] < target) {
                start = mid + 1;
            } else {
                end = mid - 1;
            }
        }
        return ans;
    }

}
