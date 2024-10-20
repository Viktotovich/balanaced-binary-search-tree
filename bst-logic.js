import sortArray from "./array-sorter.js";
sortArray("test");
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
