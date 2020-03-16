# README

## Algorithm

Main idea:

- **_An edge is a critical connection, if and only if it is not in a cycle._**

Need to maintain two variables during traversal.

`visited`: Keep tracking the rank value when visiting certain node.
`low`: Keep tracking the lowest rank value a certain node can reach.

Given two node `u` and `v`.

If they are in the same circle, `low[v] === visited[u]`.
If they are not in the same circle, `low[v] > visited[u]`.

Time Complexity: O(|V| + |E|)
Space Complexity: O(|V|)

Time Complexity: Since every edges and vertices are traversed only once.
