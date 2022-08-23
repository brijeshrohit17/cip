let input;

function reset() {
  d3.selectall("svg").remove();
}

function binaryTree() {
  reset();
  let inputText = document.getElementById("node-input");
  document.querySelector("#visualizationTypeTitle").innerHTML =
    "Binary Tree And Array";
  document.querySelector("#instructions").innerHTML =
    "click a value in the binary tree or array to highlight its corresponding location in the data";
  if (inputText.value !== "") {
    input = inputText.value
      .trim()
      .split(/\s+|\,+/g)
      .map((num) => parseInt(num));
    createBinaryTreeAndArr(input);
  }
}

function heapify() {
  reset();
  let inputText = document.getElementById("node-input");
  if (inputText.value !== "") {
    input = inputText.value
      .trim()
      .split(/\s+|\,+/g)
      .map((num) => parseInt(num));
    makeHeap(input, input.length);
    createBinaryTreeAndArr(input);
    document.getElementById("instructions").innerHTML =
      "<p> Parent's value is always greater than or equal to the values of its children.</p>";
    document.getElementById("visualizationTypeTitle").innerHTML =
      "Max-Heap Binary Tree And Array";
  }
}

function createBinaryTreeAndArr(arr) {
  arrayContainer = createContainer(
    "nodeVisualization",
    arr,
    arr.length * 60,
    100
  );
  let tree = new Tree();
  tree.createBinaryTree(input);
  createArray(arr, 2, 30, 50, 50);
}

function binarySearchTree() {
  let inputText = document.getElementById("node-input");
  if (inputText.value !== "") {
    reset();
    input = inputText.value
      .trim()
      .split(/\s+|\,+/g)
      .map((num) => parseInt(num));
    input.sort((a, b) => a - b);
    document.querySelector("#visualizationTitle").innerHTML =
      "Binary Search Tree";
    document.querySelector("#instructions").innerHTML =
      "The input data sorted and arranged into a Binary Search Tree.";
    let tree = new Tree();
    tree.binarySearchTree(input);
  }
}

//default values
// input = [10, 20, 60, 30, 70, 40, 50)
// let inputTest = document.getElementById("node-input")
// inputTest.value = input
// createBinaryTreeAndArr(input);
