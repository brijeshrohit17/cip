let swaps = [];

function swap(arr, a, b) {
  let temp = arr[a];
  arr[a] = arr[b];
  arr[b] = temp;
}

function parent(index) {
  return Math.floor((index - 1) / 2);
}
function leftchild(index) {
  return 2 * index + 1;
}
function rightChild(index) {
  return 2 * index + 2;
}
function makeHeap(arr) {
  let i; // Index of next element to be added to the heap
  let k; // Index of new element as it is being pushed
  for (i = 1; i < arr.length; ++i) k = i;
  while (k > 0 && arr[k] > arr[parent(k)]) {
    swap(arr, parent(k), k);
    k = parent(k);
  }
  return arr;
}
function reheapifyDown(arr, length) {
  let index = 0;
  let bigchildIndex;
  let isHeap = false;
  //loop keeps going while the array is not a heap and the current element
  //has at least a left child. If Leftchild(index) is greater than
  //the length of the array, the index does not have any children
  while (!isHeap && leftchild(index) < length) {
    if (rightChild(index) >= length) {
      //no right child,
      bigchildIndex = leftChild(index);
    } else if (arr[leftchild(index)] > arr[rightChild(index)]) {
      //if left child is the bigger of the two children
      bigchildIndex = leftChild(index);
    } else {
      //then right child is bigger
      bigchildIndex = rightChild(index);
    }
    //If the larger child's value is bigger than the current(parent) node,
    //swap the values and continue the Loop; otherwise it's a heap
    if (arr[index] < arr[bigchildIndex]) {
      swaps.push([index, bigchildIndex]);
      console.log("reheapifying", index, bigchildIndex);
      swap(arr, index, bigchildIndex);
      index = bigchildIndex;
    } else {
      isHeap = true;
    }
  }
}
