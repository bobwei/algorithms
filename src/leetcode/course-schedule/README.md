# README

## Algorithm

Detecting a cycle in a graph efficiently requires two stacks. One for current path. The other for completed path.

Iterate over nodes. For each iteration, use dfs to detect cycle starting from the node.

`completed` is used to track completed nodes so that we won't restart detecting from those nodes.

```js
const completed = new Set();
for (let i = 0; i < numCourses; i++) {
  if (!completed.has(i) && hasCycle(graph, i, completed)) {
    return false;
  }
}
```

`hasCycle` is a dfs function. In the begining of function call, we initialize a `visited` variable to keep tracking current visited path.

If a node in completed nodes, since it's completed, there is no cycle.
If a node in visited nodes, since it's not completed and we revisit again, there must be a cycle.

We mark a node as completed if all of its dependencies has been completed and return no cycle.

```js
function hasCycle(graph, u, completed, visited = new Set()) {
  if (completed.has(u)) {
    return false;
  }
  if (visited.has(u)) {
    return true;
  }
  visited.add(u);
  for (const v of graph[u]) {
    if (hasCycle(graph, v, completed, visited)) {
      return true;
    }
  }
  visited.delete(u);
  completed.add(u);
  return false;
}
```
