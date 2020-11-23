document.getElementById('telephone-button').addEventListener('click', () => telephoneCheck(document.getElementById('telephone-input').value));

function telephoneCheck(str) {
    let inputArray = str.split('');
    let cleanNumbers = inputArray.filter(value => value.match(/[0-9]/g));
    // REGEXP
    let allNumDiez = /^\d{10}/g;
    let hashDiez = /^\d{3}[-]\d{3}[-]\d{4}/g;
    let parenHashDiez = /^[(]\d{3}[)]\d{3}[-]\d{4}/g;
    let espacioGuionesOnce = /^[1]\s\d{3}[-]\d{3}[-]\d{4}/g;
    let espacioParentesisGuion = /^[1]\s[(]\d{3}[)]\s\d{3}[-]\d{4}/g;
    let parentesisGuionOnce = /^[1][(]\d{3}[)]\d{3}[-]\d{4}/g;
    let espaciosOnce = /^[1]\s\d{3}\s\d{3}\s\d{4}/g;
    //
    if (cleanNumbers.length == 10) {
      if (allNumDiez.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else if (hashDiez.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else if (parenHashDiez.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else {
        document.getElementById('telephone-result').innerText = `🔴 ${document.getElementById('telephone-input').value} is not a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return false;
      }
    } else if (cleanNumbers.length == 11) {
      if (espacioGuionesOnce.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else if (espacioParentesisGuion.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else if (parentesisGuionOnce.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else if (espaciosOnce.test(str)) {
        document.getElementById('telephone-result').innerText = `🟢 ${document.getElementById('telephone-input').value} is a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return true;
      } else {
        document.getElementById('telephone-result').innerText = `🔴 ${document.getElementById('telephone-input').value} is not a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
        return false;
      }
    } else {
        document.getElementById('telephone-result').innerText = `🔴 ${document.getElementById('telephone-input').value} is not a valid phone number.`;
        document.getElementById('telephone-result').style.visibility = 'visible';
      return false;
      }
    }
  