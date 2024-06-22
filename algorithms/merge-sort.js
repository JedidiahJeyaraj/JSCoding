const mergeSort = (arr) => {
  let length = arr.length;
  
  if (length <= 1) return;

  let middle = length / 2;
  let leftArr = [];
  let rightArr = [];
  let j = 0;

  for (let i = 0; i < length; i++) {
    if (i < middle) {
      leftArr[i] = arr[i];
    } else {
      rightArr[j] = arr[i];
      j++;
    }
  }

  mergeSort(leftArr);
  mergeSort(rightArr);
  merge(leftArr, rightArr, arr);
};

const merge = (leftArr, rightArr, arr) => {
  let i = 0;
  let l = 0;
  let r = 0;

  while (l < leftArr.length && r < rightArr.length) {
    if (leftArr[l] < rightArr[r]) {
      arr[i] = leftArr[l];
      i++;
      l++;
    } else {
      arr[i] = rightArr[r];
      i++;
      r++;
    }
  }

  while (l < leftArr.length) {
    arr[i] = leftArr[l];
    i++;
    l++;
  }

  while (r < rightArr.length) {
    arr[i] = rightArr[r];
    i++;
    r++;
  }
};

let input_arr = [-2, 45, 0, 11, -9];
console.log(input_arr);
mergeSort(input_arr);
console.log(input_arr);
