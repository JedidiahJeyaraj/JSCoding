const insertionSort = (arr) => {
  let inputArr = JSON.parse(JSON.stringify(arr)); // deep copy
  for (let i = 1; i < inputArr.length; i++) {
    let key = inputArr[i];
    let j = i - 1;
    while (j >= 0 && key < inputArr[j]) {
      inputArr[j + 1] = inputArr[j];
      j--;
    }
    inputArr[j + 1] = key;
  }
  return inputArr;
};

let input_arr = [-2, 45, 0, 11, -9];
console.log(input_arr);
console.log(insertionSort(input_arr));
