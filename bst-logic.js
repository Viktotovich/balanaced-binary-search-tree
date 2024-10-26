function sortArray(arr) {
  let startIndex = 0;
  let endIndex = arr.length - 1;

  if (endIndex === 0) {
    return arr;
  }

  let mid = Math.round((endIndex - startIndex) / 2);
  let leftArr = arr.slice(0, mid);
  let rightArr = arr.slice(mid);

  let sortedLeft = sortArray(leftArr);
  let sortedRight = sortArray(rightArr);

  let mergedArr = [];
  let indexL = 0;
  let indexR = 0;

  for (let i = 0; i < arr.length; i++) {
    if (
      sortedLeft[indexL] > sortedRight[indexR] &&
      sortedRight[indexR] !== undefined
    ) {
      mergedArr.push(sortedRight[indexR]);
      indexR++;
    } else if (sortedLeft[indexL] === sortedRight[indexR]) {
      //get rid of dupes
      indexR++;
    } else if (sortedLeft[indexL] !== undefined) {
      mergedArr.push(sortedLeft[indexL]);
      indexL++;
    } else {
      mergedArr.push(sortedRight[indexR]);
      indexR++;
    }
  }
  return mergedArr;
}

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

  insert(value) {
    //create a new node if value isn't already in the array
    let currentNode = this.root;
    let previousNode;

    while (currentNode !== null) {
      if (value === currentNode.value) {
        return;
      }

      if (value > currentNode.value) {
        previousNode = currentNode;
        currentNode = currentNode.right;
      } else {
        previousNode = currentNode;
        currentNode = currentNode.left;
      }
    }

    let newValue = new Node(value);

    value > previousNode.value
      ? (previousNode.right = newValue)
      : (previousNode.left = newValue);
  }
}

//test
let longList = [1, 7, 4, 23, 8, 9, 4, 3, 5, 7, 9, 67, 6345, 324];
const test = new Tree(longList);
test.showRoot();
test.insert(12);
test.insert(1);
console.log(test);

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
