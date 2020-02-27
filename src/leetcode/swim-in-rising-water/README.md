# README

## Algorithm

We maintain a `times` matrix representing minimum time required to visit `(i, j)`. And also maintaining a priority queue to always visiting the position with minimum time required first.

So we start BFS from `(0, 0)` and follow positions with minimum time required. After breaking the loop, we check the minimum time of `times[m - 1][n - 1]`.
