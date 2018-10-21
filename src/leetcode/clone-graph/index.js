/**
 * Definition for undirected graph.
 * function UndirectedGraphNode(label) {
 *     this.label = label;
 *     this.neighbors = [];   // Array of UndirectedGraphNode
 * }
 */

/**
 * @param {UndirectedGraphNode} graph
 * @return {UndirectedGraphNode}
 */
var cloneGraph = function(graph, visited = {}) {
  if (!graph) {
    return graph;
  }
  if (visited[graph.label]) {
    return visited[graph.label];
  }
  const node = new UndirectedGraphNode(graph.label);
  visited[graph.label] = node;
  for (let i = 0; i < graph.neighbors.length; i++) {
    node.neighbors[i] = cloneGraph(graph.neighbors[i], visited);
  }
  return node;
};
