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
    //bingo bango bongo, the dupes are gongo
    this.sortedArr = sortArray(arr);
    this.root = this.buildTree(this.sortedArr);
  }

  buildTree(arr, startIndex = 0, endIndex = arr.length - 1) {
    if (startIndex > endIndex) {
      return null;
    }

    let midIndex = Math.floor((startIndex + endIndex) / 2);
    let root = new Node(arr[midIndex]);

    root.left = this.buildTree(arr, startIndex, midIndex - 1);
    root.right = this.buildTree(arr, midIndex + 1, endIndex);

    return root;
  }

  showRoot() {
    console.log(this.root);
  }

  prettyPrint(node, prefix = "", isLeft = true) {
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
  }
}

//test
let longList = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const test = new Tree(longList);
test.showRoot();
console.log(test.sortedArr);

/*
  Attempt graveyard:

    let startIndex = 0;
    let endIndex = arr.length - 1;

    if (endIndex === -1) {
      return null;
    }

    let midIndex = Math.floor((endIndex - startIndex) / 2);
    let root = new Node(arr[midIndex]);

    let leftArr = arr.slice(startIndex, midIndex);
    let rightArr = arr.slice(midIndex + 1);

    console.log(
      `left arr is ${leftArr}, and right is ${rightArr}, while mid is ${arr[midIndex]}`
    );
    //mid is base
    root.left = this.buildTree(leftArr);
    root.right = this.buildTree(rightArr);

    return root;


    Why it did not work: 
    1 - Left nodes displayed as [NODE]
    2 - Start Index was always 0, and that had to do with some numbers being skipped
*/
