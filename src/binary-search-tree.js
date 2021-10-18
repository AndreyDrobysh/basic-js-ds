// const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/
module.exports = class BinarySearchTree {

  constructor () {
    this.roots = null;
  }
  
  root() {
    return this.roots
  }

  add(data) {
    
    this.roots = getData(this.roots, data)

    function getData(x, data) {
      if (!x) {
        return new Node(data)
      }

      if (data > x.data) {
        x.right = getData(x.right, data)
      }
      if(data < x.data) {
        x.left = getData(x.left, data) 
      }
      
      
      return x
    }
  }

  has(data) {

    return this.find(data) ? true : false;
  }

  find(data) {

    return search(this.roots, data)
    function search(x, data) {
      if (!x) {
        return null
      }
      if (x.data === data) {
        return x
      }
      if (data > x.data) {
        return search(x.right, data)
      }
      if (data < x.data) {
        return search(x.left, data)
      } 
      
    }
  }

  remove(data) {
    
  }

  min() {

    let x = this.roots
    while (x.left) {
      x = x.left
    }
    return x.data
  
  }

  max() {

    let x = this.roots
    while (x.right) {
      x = x.right
    }
    return x.data
  }

}