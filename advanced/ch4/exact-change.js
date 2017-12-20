
function checkCashRegister(price, cash, cid) {
  const DENOMS = [
    ['ONE HUNDRED', 10000],
    ['TWENTY', 2000],
    ['TEN', 1000],
    ['FIVE', 500],
    ['ONE', 100],
    ['QUARTER', 25],
    ['DIME', 10],
    ['NICKEL', 5],
    ['PENNY', 1]
  ];

  price = toInt(price);
  cash = toInt(cash);
  cid = cid.map(denomMapper(toInt)).reverse();
  var due = cash - price;

  if (due > countDrawer()) return 'Insufficient Funds';
  if (due == countDrawer(false)) return 'Closed';

  return DENOMS.reduce((change, denom, i) => {
    if (denom[1] > due) return change;

    change.push([denom[0], 0]);
    const lastIndex = change.length - 1,
          denomVal = denom[1];
    // Loop while we have change in drawer for this denomination and
    // the denomination is equal to or less than the change due.
    while (cid[i][1] > 0 && denomVal <= due) {
      change[lastIndex][1] += denomVal;
      cid[i][1] -= denomVal;
      due -= denomVal;
    }
    return change;
  }, []).map(denomMapper(toFloat));

  function toInt(num) {
    return Number((num * 100).toFixed(0));
  }

  function toFloat(num) {
    return Number((num / 100).toFixed(2));
  }

  function denomMapper(cb) {
    return denom => [denom[0], cb(denom[1])];
  }

  function countDrawer(skipAbove = true) {
    return cid.reduce((total, denom, i) => {
      if (!skipAbove || due >= DENOMS[i][1]) return total + denom[1];
      return total;
    }, 0);
  }
}

// Example cash-in-drawer array:
// [["PENNY", 1.01],
// ["NICKEL", 2.05],
// ["DIME", 3.10],
// ["QUARTER", 4.25],
// ["ONE", 90.00],
// ["FIVE", 55.00],
// ["TEN", 20.00],
// ["TWENTY", 60.00],
// ["ONE HUNDRED", 100.00]]

checkCashRegister(19.50, 20.00, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.10], ["QUARTER", 4.25], ["ONE", 90.00], ["FIVE", 55.00], ["TEN", 20.00], ["TWENTY", 60.00], ["ONE HUNDRED", 100.00]]);
