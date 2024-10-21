/*We are using merge sort 
  -Sort Left
  -Sort Right 
  -Merge
*/

export default function sortArray(arr) {
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
