/* 
    Pseudocode:
        Make the middle element as the root
        Do the same for the left and right half
        The middle of the left half becomes the root
        The middle of the right half becomes the root
        Return the tree 

    Observations: Root node is middle element of sorted array

    Algorithm: 
    1 - Initialize start 0, end = length of the array - 1
    2 - mid = (mid+end)/ 2
    3 - Create a tree node with mid as root (lets call it A)
    4 - Recursively do the following:
        i - Calculate the middle of left subarray and make it root of left subtree of A
        ii - Calculate mid of right subarray and make it root of right subtree of A

    Problem to be solved: It looks like the data that we're going to be getting isn't sorted, which means we have to sort the data first. Might mean we have to use the mergeSort - but we also have to eliminate duplicates.

    Also, we need to get rid of duplicates, i.e: 4 and 4 
*/

/*
    A BST is balanced if: 
    - Height of left subtree and right subtree of root differ by at most 1
    - Left Subtree is balanced
    - Right Subtree is balanced
*/

/*functions here should not care how it sorts, only know that it does */
import sortArray from "./array-sorter.js";

class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class Tree {
  constructor(arr) {
    this.root = this.buildTree();
  }

  buildTree(arr) {
    //bingo bango bongo, the dupes are gongo
    let sortedArr = sortArray(arr);
    /* we'd need to call something else to make it recursive with 3 args: arr, left arr, right arr. Mid array will be root.
    
    We cooould do it in this function itself, but I want more control, and to be more modular*/
    return;
  }
}

//test
console.log(sortArray([1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324]));

const prettyPrint = (node, prefix = "", isLeft = true) => {
  if (node === null) {
    return;
  }
  if (node.right !== null) {
    prettyPrint(node.right, `${prefix}${isLeft ? "│   " : "    "}`, false);
  }
  console.log(`${prefix}${isLeft ? "└── " : "┌── "}${node.data}`);
  if (node.left !== null) {
    prettyPrint(node.left, `${prefix}${isLeft ? "    " : "│   "}`, true);
  }
};
