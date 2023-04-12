let x = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

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
// console.log(InsertionSort(x));
// console.log(x);

function Merge(A, p, q, r) {
    /*
        - Creating Two Arrays L[0,....,q+1], R[q+1,....,r+1],
        - Add Half element to  L[i] = A[p..,q]
        - Add Another Half element to  R[i] = A[q+1..,r]
        
    */
    let n1 = q - p + 1;
    let n2 = r - q;
    let L = Array(n1 + 1);
    let R = Array(n2 + 1);

    for (let i = 0; i < n1; i++) {
        L[i] = A[p + i];
    }
    for (let j = 0; j < n2; j++) {
        R[j] = A[q + j + 1];
    }

    L[n1] = Infinity;
    R[n2] = Infinity;

    let i = 0;
    let j = 0;
    for (let k = p; k <= r; k++) {
        if (L[i] <= R[j]) {
            A[k] = L[i];
            i++;
        } else {
            A[k] = R[j];
            j++;
        }
    }
}

function MergeSort(A, p, r) {
    if (p < r) {
        let q = Math.floor((p + r) / 2);
        MergeSort(A, p, q);
        MergeSort(A, q + 1, r);
        Merge(A, p, q, r);
    }
}
MergeSort(x, 0, 9);
console.log(x);