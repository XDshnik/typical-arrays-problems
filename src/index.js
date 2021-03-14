// I wouldn't use any sort here before searching
  // for the minimum value in array because it will become
  // easier to solve the task :) but i know i should do this
exports.min = function min (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    if (array.length === 1) {
      return array;
    } else {
      let min = array[0];
      for (let i = 0; i<array.length; i++) {
        (array[i]<min) ? (min=array[i]) : i=i;
      }
      return min
    }
  }  
}

exports.max = function max (array) {
  if (!array || array.length === 0) {
    return 0;
  }  else {
    if (array.length === 1) {
      return array;
    } else {
      let max = array[0];
      for (let i = 0; i<array.length; i++) {
        (array[i]>max) ? (max=array[i]) : i=i;
      }
      return max
    }
  }  
}

exports.avg = function avg (array) {
  if (!array || array.length === 0) {
    return 0;
  } else {
    let avg = 0;
    for (let i = 0 ; i<array.length; i++) {
      avg += array[i]
    }
  return (avg/array.length);
  }
}
