function sumFibs(num) {
  return generateFibSeq().filter(elem => elem % 2).reduce((total, next) => total + next, 0);

  function generateFibSeq() {
    const seq = [];

    function generate(current, next) {
      if (current > num) {
        return;
      }
      seq.push(current);
      generate(next, current + next);
    }

    generate(1, 1);
    return seq;
  }
}

sumFibs(1000);
