/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = {};
  for (const [from, to] of tickets) {
    if (!(from in graph)) graph[from] = [];
    graph[from].push(to);
  }
  for (const key in graph) {
    graph[key].sort();
  }
  const output = dfs(graph, 'JFK');
  return output.reverse();
};

function dfs(graph, u, output = []) {
  const neighbors = graph[u] || [];
  while (neighbors.length) {
    const v = neighbors.shift();
    dfs(graph, v, output);
  }
  output.push(u);
  return output;
}
