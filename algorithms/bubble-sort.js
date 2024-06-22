


const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
};



let input_arr = [-2, 45, 0, 11, -9];
console.log(input_arr)
bubbleSort(input_arr)
console.log(input_arr);
