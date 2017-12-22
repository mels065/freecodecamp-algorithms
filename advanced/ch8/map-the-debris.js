function orbitalPeriod(arr) {
  var GM = 398600.4418;
  var earthRadius = 6367.4447;
  return arr.map(orbitalBody => (
    {
      name: orbitalBody.name,
      orbitalPeriod: Math.round(2 * Math.PI * Math.sqrt(Math.pow(orbitalBody.avgAlt + earthRadius, 3) / GM))}
  ));
}

orbitalPeriod([{name : "sputnik", avgAlt : 35873.5553}]);
