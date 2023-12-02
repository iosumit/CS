def LCS(x, y):
    lx = len(x)
    ly = len(y)
    dp = [[0 for i in range(ly+1)] for j in range(lx+1)]

    for i in range(1, lx+1, 1):
        for j in range(1, ly+1, 1):
            if x[i-1]==y[j-1]:
                dp[i][j] = dp[i-1][j-1]+1
            else:
                dp[i][j] = max(dp[i-1][j], dp[i][j-1])

    return dp[lx-1][ly-1]

print(LCS("qpqrr", "pqprqrp"))