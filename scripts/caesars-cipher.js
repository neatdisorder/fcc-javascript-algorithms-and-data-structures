document.getElementById('caesars-button').addEventListener('click', () => rot13(document.getElementById('caesars-input').value));

let cipher = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];

let abc = ["N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z", "A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M"];

function rot13(str) {

  let strArray = str.split('');

  let resultArray = [];

  console.log(strArray);

  for (let i = 0; i < strArray.length; i++) {
    if (cipher.indexOf(strArray[i]) >= 0) {
      resultArray.push(abc[cipher.indexOf(strArray[i])]);
    } else {
      resultArray.push(strArray[i]);
    }
  }

  console.log(resultArray);

  let result = resultArray.join('');

  console.log(result);

  document.getElementById('caesars-result').innerText = `📖 ${document.getElementById('caesars-input').value} translates to "${result}".`;
  document.getElementById('caesars-result').style.visibility = 'visible';

  return result;
}

