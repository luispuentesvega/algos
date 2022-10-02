function mergeOverlappingIntervals(array) {
  // R.E.A.C.T.O
  const res = [];

  //sort the array
  array.sort((a, b) => a[0] - b[0]);

  //1.loop the array
  //2.compare the array[1] if it is smaller than the next array[0], then add to the res array
  //3.if it is bigger, then move to the next array and do step 2 till the end

  for (let i = 0; i < array.length; i++) {
    //0
    const current = array[i]; //[1,10]

    if (array[i + 1]) {
      //
      if (array[i][1] < array[i + 1][0]) {
        //
        res.push([array[i][0], array[i][1]]); //
        continue; //
      }

      while (array[i + 1] && current[1] >= array[i + 1][0]) {
        //10>
        i++; //1
      }
      // i++;
    }

    console.log(i);

    if (i === array.length - 1 && current[1] > array[i][0]) {
      res.push([current[0], current[1]]); //
    } else {
      res.push([current[0], array[i][1]]); //
      // i++;
    }
  }

  return res;
}

const intervals = [[1, 2], [3, 5], [4, 7], [6, 8], [9, 10]];

console.log(mergeOverlappingIntervals(intervals));
