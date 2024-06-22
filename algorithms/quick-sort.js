const quickSort = (arr, start, end) => {
  if (end <= start) return;

  let pivot = partition(arr, start, end);
  // console.log(pivot, arr);
  quickSort(arr, start, pivot - 1);
  quickSort(arr, pivot + 1, end);
};

const partition = (arr, start, end) => {
  let pivot = arr[end];
  let i = start - 1;

  for (let j = start; j <= end - 1; j++) {
    if (arr[j] < pivot) {
      i++;
      let temp = arr[i];
      arr[i] = arr[j];
      arr[j] = temp;
    }
  }
  i++;
  let temp = arr[i];
  arr[i] = arr[end];
  arr[end] = temp;
  return i;
};

let input_arr = [-2, 45, 0, 11, -9];
console.log(input_arr);
quickSort(input_arr, 0, input_arr.length - 1);
console.log(input_arr);
