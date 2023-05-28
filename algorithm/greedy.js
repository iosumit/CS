function knapsackProblem() {
    // [weight, profit];
    // let w_p = [[18, 25], [15, 24], [10, 15]];
    let w_p = [[2, 10], [3, 5], [5, 15], [7, 7], [1, 6], [4, 18], [1, 3]];
    // bag Space
    let bagSpace = 15 //20;

    // Greedy About Profits
    // w_p.sort((a, b) => b[1] - a[1]);
    // Greedy About Weights
    // w_p.sort((a, b) => a[0] - b[0]);

    // Greedy About Ratios (profit/weights) (BETTER)
    w_p.sort((a, b) => (b[1] / b[0]) - (a[1] / a[0]));

    let profit = 0;
    let i = 0;
    for (i = 0; i < w_p.length; i++) {
        const o = w_p[i];
        if (o[0] <= bagSpace) {
            bagSpace -= o[0];
            profit += o[1];
        } else {
            break;
        }
    }
    if (bagSpace != 0) {
        profit += (w_p[i][1] / w_p[i][0]) * bagSpace;
    }

    console.log(profit);
}
knapsackProblem();