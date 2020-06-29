const timeit = require("../../utils/timeit");

/*
Given a list of airline tickets represented by pairs of departure and arrival 
airports [from, to], reconstruct the itinerary in order. All of the tickets 
belong to a man who departs from JFK. Thus, the itinerary must begin with JFK.

Note:

If there are multiple valid itineraries, you should return the itinerary that 
has the smallest lexical order when read as a single string. For example, the 
itinerary ["JFK", "LGA"] has a smaller lexical order than ["JFK", "LGB"].
All airports are represented by three capital letters (IATA code).
You may assume all tickets form at least one valid itinerary.
One must use all the tickets once and only once.
Example 1:

Input: [["MUC", "LHR"], ["JFK", "MUC"], ["SFO", "SJC"], ["LHR", "SFO"]]
Output: ["JFK", "MUC", "LHR", "SFO", "SJC"]
Example 2:

Input: [["JFK","SFO"],["JFK","ATL"],["SFO","ATL"],["ATL","JFK"],["ATL","SFO"]]
Output: ["JFK","ATL","JFK","SFO","ATL","SFO"]
Explanation: Another possible reconstruction is ["JFK","SFO","ATL","JFK","ATL","SFO"].
             But it is larger in lexical order.

*/

function Node(val) {
  this.val = val;
  this.next = null;
  this.prev = null;
}

/**
 * @param {string[][]} tickets
 * @return {string[]}
 */
// Incomplete
var findItinerary = function (tickets) {
  const map = new Map();

  for (let ticket of tickets) {
    const [src, cur_dst, new_dst] = [ticket[0], map.get(ticket[0]), ticket[1]];
    if (map.has(src)) {
      const new_node = new Node(new_dst);
      let cur_node = map.get(src);
      while (new_dst > cur_node.val && cur_node.next !== null) {
        cur_node = node.next;
      }
      new_node.next = cur_node.next;
      cur_node.next = new_node;
    } else {
      map.set(src, new Node(new_dst));
    }
  }

  console.log(map);
};

timeit(
  findItinerary,
  ["JFK", "MUC", "LHR", "SFO", "SJC"],
  [
    ["MUC", "LHR"],
    ["JFK", "MUC"],
    ["SFO", "SJC"],
    ["LHR", "SFO"],
  ]
);
timeit(
  findItinerary,
  ["JFK", "ATL", "JFK", "SFO", "ATL", "SFO"],
  [
    ["JFK", "SFO"],
    ["JFK", "ATL"],
    ["SFO", "ATL"],
    ["ATL", "JFK"],
    ["ATL", "SFO"],
  ]
);
