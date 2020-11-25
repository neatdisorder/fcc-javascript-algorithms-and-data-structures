document.getElementById('cash-button').addEventListener('click', () => {

if (document.getElementById('cash-1').checked) {
  checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
} else if (document.getElementById('cash-2').checked) {
  checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
} else if (document.getElementById('cash-3').checked) {
  checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
} else if (document.getElementById('cash-4').checked) {
  checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
}

/*
switch (document.getElementById('cash-register-input').value) {
  case 'cash-1':
    checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    break;
  case 'cash-2':
    checkCashRegister(3.26, 100, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);
    break;
  case 'cash-3':
    checkCashRegister(19.5, 20, [["PENNY", 0.01], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    break;
  case 'cash-4':
    checkCashRegister(19.5, 20, [["PENNY", 0.5], ["NICKEL", 0], ["DIME", 0], ["QUARTER", 0], ["ONE", 0], ["FIVE", 0], ["TEN", 0], ["TWENTY", 0], ["ONE HUNDRED", 0]]);
    break;
*/

});


// Valor de los billetes.

const valueOfPennies = 0.01, valueOfNickels = 0.05, valueOfDimes = 0.1, valueOfQuarters = 0.25, valueOfDollars = 1, valueOfFives = 5, valueOfTens = 10, valueOfTwenties = 20, valueOfHundreds = 100;

function checkCashRegister(price, cash, cid) {
    console.log(price);
    console.log(cash);
    console.log(cid);
  // Cantidad de los billetes.
  let numberOfPennies = (cid[0][1]/valueOfPennies), numberOfNickels = (cid[1][1]/valueOfNickels), numberOfDimes = (cid[2][1]/valueOfDimes), numberOfQuarters = (cid[3][1]/valueOfQuarters), numberOfDollars = (cid[4][1]/valueOfDollars), numberOfFives = (cid[5][1]/valueOfFives), numberOfTens = (cid[6][1]/valueOfTens), numberOfTwenties = (cid[7][1]/valueOfTwenties), numberOfHundreds = (cid[8][1]/valueOfHundreds);
  // Guardar valor y cantidad en un array.
  let valueAndNumber = [[valueOfPennies, numberOfPennies], [valueOfNickels, parseFloat(numberOfNickels.toFixed(2))], [valueOfDimes, numberOfDimes], [valueOfQuarters, numberOfQuarters], [valueOfDollars, numberOfDollars], [valueOfFives, numberOfFives], [valueOfTens, numberOfTens], [valueOfTwenties, numberOfTwenties], [valueOfHundreds, numberOfHundreds]];
  console.log(valueAndNumber);
  // Seteo de otras variables.
  let changeInReturn = [];
  let penniesNeeded = 0, nickelsNeeded = 0, dimesNeeded = 0, quartersNeeded = 0, dollarsNeeded = 0, fivesNeeded = 0, tensNeeded = 0, twentiesNeeded = 0, hundredsNeeded = 0;
  // Calcular cambio necesario y cantidad de plata en la caja.
  let changeDue = cash - price;
  let totalCid = 0;
  for (let i = 0; i < cid.length; i++) {
    totalCid += cid[i][1];
  }
  // Bifuración de tres opciones.
  if (totalCid == changeDue) {
    let changeInReturn = cid;
    let changeEqualReturn = new Return("CLOSED", changeInReturn);
    document.getElementById('cash-result').innerText = `📖  ${JSON.stringify(changeEqualReturn)}.`;
    document.getElementById('cash-result').style.visibility = 'visible';
    return changeEqualReturn;
  } else if (totalCid < changeDue) {
    let changeLessReturn = new Return("INSUFFICIENT_FUNDS", changeInReturn);
    document.getElementById('cash-result').innerText = `📖  ${JSON.stringify(changeLessReturn)}.`;
    document.getElementById('cash-result').style.visibility = 'visible';
    return changeLessReturn;
  } else if (totalCid > changeDue) {
    // LA PAPA
    
    console.log('// Cambio que se debe:');
    console.log(changeDue);
    console.log('// Cálculo de billetes');

    // Cálculo de billetes necesarios.

    while (changeDue >= valueOfHundreds) {
    changeDue -= 100;
    hundredsNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(hundredsNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfTwenties) {
    changeDue -= 20;
    twentiesNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(twentiesNeeded);
    console.log(changeDue);
    
    while (changeDue >= valueOfTens) {
    changeDue -= 10;
    tensNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(tensNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfFives) {
    changeDue -= 5;
    fivesNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }
    
    console.log(fivesNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfDollars) {
    changeDue -= 1;
    dollarsNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(dollarsNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfQuarters) {
    changeDue -= 0.25;
    quartersNeeded += 1;
    changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(quartersNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfDimes) {
      changeDue -= 0.1;
      dimesNeeded += 1;
      changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(dimesNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfNickels) {
      changeDue -= 0.05;
      nickelsNeeded += 1;
      changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(nickelsNeeded);
    console.log(changeDue);

    while (changeDue >= valueOfPennies) {
      changeDue -= 0.01;
      penniesNeeded += 1;
      changeDue = parseFloat(changeDue.toFixed(2));
    }

    console.log(penniesNeeded);
    console.log(changeDue);

  // Conclusión en array de billetes necesarios.

  let provisionalChange = [["HUNDRED", hundredsNeeded * valueOfHundreds], ["TWENTY", twentiesNeeded * valueOfTwenties], ["TEN", tensNeeded * valueOfTens], ["FIVE", fivesNeeded * valueOfFives], ["ONE", dollarsNeeded * valueOfDollars], ["QUARTER", quartersNeeded * valueOfQuarters], ["DIME", dimesNeeded * valueOfDimes], ["NICKEL", nickelsNeeded * valueOfNickels], ["PENNY", penniesNeeded * valueOfPennies]];
  console.log(provisionalChange);
  // Chequeo de si hay cambio en ese billete.
  console.log("// Chequeo de billetes");
  for (let i = 0, j = (cid.length - 1); i < provisionalChange.length; i++, j--) {
    console.log(provisionalChange[i], cid[j]);
    if (provisionalChange[i][1] == 0) {
      changeInReturn.push(provisionalChange[i]);
    } else if (provisionalChange[i][1] < cid[j][1]) {
      changeInReturn.push(provisionalChange[i]);
    } else if (provisionalChange[i][1] >= cid[j][1]) {
      // LA POSTA DE LA MILANESA
      console.log('// LA POSTA');
      console.log(provisionalChange[i][1], cid[j][1]);
      let changeLeft = provisionalChange[i][1] - cid[j][1];
      console.log(changeLeft);
      changeInReturn.push(cid[j]);
      if (i < 7) {
        provisionalChange[(i+1)][1] += changeLeft;
        console.log(provisionalChange[(i+1)]);
        console.log('//');
      } else if (i == 7) {
        let changeInReturn = [];
        let changeLessReturn = new Return("INSUFFICIENT_FUNDS", changeInReturn);
        document.getElementById('cash-result').innerText = `📖  ${JSON.stringify(changeLessReturn)}.`;
        document.getElementById('cash-result').style.visibility = 'visible';
        return changeLessReturn;
      }
      // LA POSTA DE LA MILANESA
    }
  }
  // Return de fin.
  console.log('// RETURN');
  let finalChange = changeInReturn.filter(value => value[1] != 0);
  console.log(finalChange);
  let changeMoreReturn = new Return("OPEN", finalChange);
  document.getElementById('cash-result').innerText = `📖  ${JSON.stringify(changeMoreReturn)}.`;
  document.getElementById('cash-result').style.visibility = 'visible';
  return changeMoreReturn;
  // FIN DE LA PAPA
  }
}

// checkCashRegister(19.5, 20, [["PENNY", 1.01], ["NICKEL", 2.05], ["DIME", 3.1], ["QUARTER", 4.25], ["ONE", 90], ["FIVE", 55], ["TEN", 20], ["TWENTY", 60], ["ONE HUNDRED", 100]]);

function Return(status, change) {
  this.status = status;
  this.change = change;
}
