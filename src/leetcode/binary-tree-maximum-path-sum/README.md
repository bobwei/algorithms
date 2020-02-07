# README

## Algorithm

For every visited node, we calculate `localMax` and `globalMax`.

`localMax`: Maximum value tnat can connect current node to its parent on the path. So it does not include this.

left <- root -> right

`globalMax`: Maximum value that can be formed within a tree rooted at current node.

So for each node, we ask the information above from its left and right children and compute the result.
