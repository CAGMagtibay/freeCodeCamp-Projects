// This function accepts a purchase price, a payment, and a count of cash in the drawer as input arguments.
// It returns a transaction status and the amount of change being given.
function checkCashRegister(price, cash, cid) {
  let changeDue = cash - price;
  // console.log(changeDue);
  let returnObject = {
    status: "",
    change: []
  };

  // create bill value lookup
  const currencyLookup = [
    ["ONE HUNDRED", 100],
    ["TWENTY", 20.00],
    ["TEN", 10.00],
    ["FIVE", 5.00],
    ["ONE", 1.00],
    ["QUARTER", 0.25],
    ["DIME", 0.10],
    ["NICKEL", 0.05],
    ["PENNY", 0.01],
  ];

  // find total cash in drawer
  let cidTotal = 0;

  for (let i = 0; i < cid.length; i++) {
    cidTotal += cid[i][1];
  }
  // console.log(cidTotal);

  // INSUFFICIENT_FUNDS case where cid < changeDue:
  if (cidTotal < changeDue) {
    returnObject.status = "INSUFFICIENT_FUNDS";
    return returnObject;
  }

  // CLOSED case:
  if (cidTotal === changeDue) {
    returnObject.status = "CLOSED";
    returnObject.change = cid;
    return returnObject;
  }

  // find change
  let currentChange = changeDue;
  let neededChange = [];

  // iterate through currencyLookup and compare to cid
  cid.reverse();
  for (let i = 0; i < currencyLookup.length; i++) {
    let billCount = 0;
    // find number of bills of currency denom in drawer
    let billsAvailable = cid[i][1] / currencyLookup[i][1];
    billsAvailable.toFixed(2);
    //console.log(billsAvailable);
    while (currentChange.toFixed(2) >= currencyLookup[i][1] && billsAvailable >= 1) {
      // console.log(currencyLookup[i]);
      currentChange -= currencyLookup[i][1]
      billCount++;
      //console.log("Bill Count: " + billCount);
      billsAvailable--;
    }

    if (billCount > 0) {
      neededChange.push([currencyLookup[i][0], billCount * currencyLookup[i][1]]);
      //console.log("neededChange: " + neededChange);
    }
  }

  // handle case where exact change cannot be returned:
  let neededTotal = 0;
  for (let i = 0; i < neededChange.length; i++) {
    neededTotal += neededChange[i][1];
  }
  neededTotal = neededTotal.toFixed(2);
  console.log(neededTotal);

  if (neededTotal < changeDue) {
    returnObject.status = "INSUFFICIENT_FUNDS";
    return returnObject;
  }
  
  returnObject.status = "OPEN";
  returnObject.change = neededChange;

  return returnObject;
}

// This input should return {status: "OPEN", change: [["QUARTER", 0.5]]}
checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
// This input should return {status: "OPEN", change: [["TWENTY", 60], ["TEN", 20], ["FIVE", 15], ["ONE", 1], ["QUARTER", 0.5], ["DIME", 0.2], ["PENNY", 0.04]]}
checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]])
// This input should return {status: "INSUFFICIENT_FUNDS", change: []}
checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 1], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]])
