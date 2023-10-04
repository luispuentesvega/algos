function garbageCollection(garbage, travel) {
  // define variables: totalMinutes
  const trucks = { M: 0, P: 0, G: 0 };
  // loop the trucks
  for (let truck of Object.keys(trucks)) {
    console.log('truck:', truck);

    // check if the truck should loop the garbage if so, then till which one
    const maxIndexToCheck = checkMaxGarbageIndex(truck, garbage);
    console.log('maxIndexToCheck:', truck, maxIndexToCheck);

    // loop the garbages
    for (let i = 0; i <= maxIndexToCheck; i++) {
      let newString = '';
      if (i > 0) trucks[truck] = trucks[truck] + travel[i - 1];

      // loop the items in each garbage
      for (let s of garbage[i]) {
        if (s === truck) {
          trucks[truck] = trucks[truck] + 1;
        } else {
          newString += s;
        }
      }
      garbage[i] = newString;
    }
  }
  const times = Object.values(trucks);
  const res = times.reduce((prev, current) => prev + current, 0);
  return res;
}

function checkMaxGarbageIndex(truck, garbage) {
  let index = 0;

  for (let i = 0; i < garbage.length; i++) {
    const currentGarbage = garbage[i];
    if (currentGarbage.includes(truck)) {
      index = i;
    }
  }

  return index;
}

// const garbage = ['G', 'P', 'GP', 'GG'];
// const travel = [2, 4, 3];
const garbage = ['MMM', 'PGM', 'GP'];
const travel = [3, 10];

garbageCollection(garbage, travel);
