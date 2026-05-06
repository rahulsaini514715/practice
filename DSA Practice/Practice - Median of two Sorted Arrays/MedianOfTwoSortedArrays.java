
public class MedianOfTwoSortedArrays {

    public static void main(String[] args) {
        int[] nums1 = {1, 9};
        int[] nums2 = {3, 4, 5};

        /*
        #Steps to solve
        Step 1: Merge the Two Sorted Arrays
        Since the arrays are already sorted, let's merge them:
         Merged Array = [1, 3, 4, 5, 9]

         Step 2: Find the Median
         The total number of elements (N) = 5 (odd count).
         The median is the middle element.
         The middle index = N / 2 = 5 / 2 = 2 (0-based index).
         Thus, the median is the element at index 2, which is 4.
         */
        MedianOfTwoSortedArrays solution = new MedianOfTwoSortedArrays();
        double median = solution.findMedianSortedArrays(nums1, nums2);

        System.out.println("Median of the two sorted arrays: " + median);
    }

    public double findMedianSortedArrays(int[] nums1, int[] nums2) {
        // make num1 as min length array.
        // call same function, and change the params
        // if nums1 was greater and nums2 was smaller
        // so because we swapped these two, now nums1 is smaller and
        // nums2 is greater.
        if (nums1.length > nums2.length) {
            return findMedianSortedArrays(nums2, nums1);
        }
        // nums1 is smaller and num2 is greater.
        int n1 = nums1.length;
        int n2 = nums2.length;
        int N = n1 + n2;
        int start = 0;
        int end = n1;
        while (start <= end) {
            // mid -> cut1
            int cut1 = start + (end - start) / 2;
            // (n1 + n2)/2 - length of cut1
            int cut2 = N / 2 - cut1;
            // l1,l2, r1 and r2.
            int l1 = (cut1 == 0) ? Integer.MIN_VALUE : nums1[cut1 - 1];
            int l2 = (cut2 == 0) ? Integer.MIN_VALUE : nums2[cut2 - 1];
            int r1 = (cut1 == n1) ? Integer.MAX_VALUE : nums1[cut1];
            int r2 = (cut2 == n2) ? Integer.MAX_VALUE : nums2[cut2];

            // check if cut is valid
            if (l1 <= r2 && l2 <= r1) {
                // if N is odd, only one median
                if (N % 2 != 0) {
                    return (double) Math.min(r1, r2);
                } // else if N is even, two medians, so take average
                else {
                    return ((Math.max(l1, l2) + Math.min(r1, r2)) / 2.0);
                }
            } else if (l1 > r2) {
                end = cut1 - 1;
            } else {
                start = cut1 + 1;
            }
        }
        return 0.0; // to avoid error
    }
}
