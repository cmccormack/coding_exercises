const timeit = require("../../utils/timeit");

/*

Implement a trie with insert, search, and startsWith methods.

Example:

Trie trie = new Trie();

trie.insert("apple");
trie.search("apple");   // returns true
trie.search("app");     // returns false
trie.startsWith("app"); // returns true
trie.insert("app");   
trie.search("app");     // returns true

Note:

    You may assume that all inputs are consist of lowercase letters a-z.
    All inputs are guaranteed to be non-empty strings.

*/

var TrieNode = function () {
  this.children = {}; // Children is map of trie nodes e.g., {a: TrieNode(children...)}
  this.isLastNode = false;
};

/**
 * Initialize your data structure here.
 */
var Trie = function () {
  this.root = new TrieNode();
};

/**
 * Inserts a word into the trie.
 * @param {string} word
 * @return {void}
 */
Trie.prototype.insert = function (word) {
  let current = this.root;
  for (let letter of word) {
    if (!(letter in current.children)) {
      current.children[letter] = new TrieNode();
    }
    current = current.children[letter];
  }
  current.isLastNode = true;
  return null;
};

/**
 * Returns if the prefix is in the trie.
 * @param {string} prefix
 * @return {TrieNode}
 */
Trie.prototype.__find = function (prefix) {
  let current = this.root;
  for (let letter of prefix) {
    if (!(letter in current.children)) return false;
    current = current.children[letter];
  }
  return current;
};
/**
 * Returns if the word is in the trie.
 * @param {string} word
 * @return {boolean}
 */
Trie.prototype.search = function (word) {
  return this.__find(word).isLastNode || false;
};

/**
 * Returns if there is any word in the trie that starts with the given prefix.
 * @param {string} prefix
 * @return {boolean}
 */
Trie.prototype.startsWith = function (prefix) {
  return !!this.__find(prefix);
};
/**
 * Your Trie object will be instantiated and called as such:
 * var obj = new Trie()
 * obj.insert(word)
 * var param_2 = obj.search(word)
 * var param_3 = obj.startsWith(prefix)
 */

const trie = new Trie();

timeit(trie.insert.bind(trie), null, "apple");
timeit(trie.search.bind(trie), true, "apple");
timeit(trie.search.bind(trie), false, "app");
timeit(trie.startsWith.bind(trie), true, "app");
timeit(trie.insert.bind(trie), null, "app");
timeit(trie.search.bind(trie), true, "app");
