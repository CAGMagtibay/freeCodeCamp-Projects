// THis function takes in an array of objects and returns an array that transforms the elements' average altitude into their orbital periods in seconds.
function orbitalPeriod(arr) {
  const GM = 398600.4418;
  const earthRadius = 6367.4447;

  const orbitalPeriods = [];
  for (let i = 0; i < arr.length; i++) {
    orbitalPeriods.push({name: arr[i]["name"], orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(earthRadius + arr[i]["avgAlt"], 3) / GM))});
  }

  return orbitalPeriods;
}

// This input should return [{name: "sputnik", orbitalPeriod: 86400}]
orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
