/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
var findItinerary = function(tickets) {
  const graph = createGraph(tickets);
  return helper(graph, 'JFK').reverse();
};

function helper(graph, u, output = []) {
  while (graph[u].length) {
    const v = graph[u].shift();
    helper(graph, v, output);
  }
  output.push(u);
  return output;
}

function createGraph(tickets) {
  const graph = {};
  for (const [t1, t2] of tickets) {
    if (!(t1 in graph)) graph[t1] = [];
    if (!(t2 in graph)) graph[t2] = [];
    graph[t1].push(t2);
  }
  for (const key in graph) {
    graph[key].sort();
  }
  return graph;
}
