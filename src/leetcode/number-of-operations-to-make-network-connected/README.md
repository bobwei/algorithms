# README

## Algorithm

If there are n computers, it only requires n - 1 edges to make it connected. So if there are more than n - 1 edges, it must be able to make it connected.

Use DFS to find number of groups. To connect those disconnected groups, it requires (number of groups - 1) moves.
