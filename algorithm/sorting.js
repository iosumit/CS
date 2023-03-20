function InsertionSort(nums) {
    /*  while length A[1-n] !0
        - left (0)
        - Pick one from right i 
        - Compare with left 
        - start from i-1
        - do
            if left is greater move it to i+1
            else break
        - a[i] = pickedup element
    */

    let movementAndComparisions = 0;

    for (let i = 1; i < nums.length; i++) {
        const key = nums[i];
        let j = i - 1;
        while (j >= 0 && nums[j] > key) {   // n-1 each
            nums[j + 1] = nums[j];          // n-1 each
            j--;
            movementAndComparisions++;
            movementAndComparisions++;
        }
        nums[j + 1] = key;
    }

    console.log("Movement and Comparision : ", movementAndComparisions);

    /*
        For better time complexity
                               Comparision     Movement
        Binary search           O(log(n))       O(n)  => O(n)       
        Double linked list       O(n)           O(1)  => O(n) 
        
        Therefore,  Can't do be better
             T(n) => O(n^2) & Omega(n^2)
             S(n) => O(1) | Inplace Algorithm
    */

    return nums;
}
// console.log(InsertionSort([9, 6, 5, 0, 8, 2, 7, 1, 3]));
console.log(InsertionSort([9, 8, 7, 6, 5, 4, 3, 2, 1, 0]));