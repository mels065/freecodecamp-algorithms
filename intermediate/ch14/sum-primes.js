function sumPrimes(num) {
  return generatePrimes().reduce((total, next) => total + next, 0);

  function generatePrimes() {
    var primeMap = [].concat([false, false], Array.apply(null, {length: num - 1}).fill(true)),
        current = 0;
    while (~(current = primeMap.indexOf(true, current+1))) {
      for (let i = 2; current * i <= num; i++) primeMap[current * i] = false;
    }

    return primeMap.reduce((curMap, isPrime, i) => {
      if (isPrime) curMap.push(i);
      return curMap;
    }, []);
  }
}

sumPrimes(50);
