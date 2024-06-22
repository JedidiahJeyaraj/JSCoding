const selectionSort = (arr) => {
  let inputArr = JSON.parse(JSON.stringify(arr)); // deep copy
  for (let i = 0; i < inputArr.length - 1; i++) {
    let min_idx = i;
    for (let j = i + 1; j < inputArr.length; j++) {
      if (inputArr[j] < inputArr[min_idx]) {
        min_idx = j;
      }
    }

    let temp = inputArr[i];
    inputArr[i] = inputArr[min_idx];
    inputArr[min_idx] = temp;
  }
  return inputArr;
};

let input_arr = [-2, 45, 0, 11, -9];
console.log(input_arr);
console.log(selectionSort(input_arr));
