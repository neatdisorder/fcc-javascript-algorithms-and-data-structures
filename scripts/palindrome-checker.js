document.getElementById('palindrome-button').addEventListener('click', () => palindrome(document.getElementById('palindrome-input').value));

function palindrome(str) {

    // 1. Generar array original.
  
    let originalArrayClean = str.split('');
    console.log(originalArrayClean);
  
    let originalArrayFiltered = originalArrayClean.filter(value => value.match(/[a-z0-9]/ig));
    console.log(originalArrayFiltered);
  
    let originalArrayFilteredString = originalArrayFiltered.join('');
    console.log(originalArrayFilteredString);
  
    let originalArrayFilteredStringLower = originalArrayFilteredString.toLowerCase();
  
    console.log(originalArrayFilteredStringLower);
  
    console.log('///');
  
    // 2. Generar array invertida.
  
    let reversedArrayFiltered = [];
  
    for (let i = (originalArrayFiltered.length - 1); i >= 0; i--) {
      reversedArrayFiltered.push(originalArrayFiltered[i]);
    }
  
    console.log(reversedArrayFiltered);
  
    let reversedArrayFilteredString = reversedArrayFiltered.join('');
  
    console.log(reversedArrayFilteredString);
  
    let reversedArrayFilteredStringLower = reversedArrayFilteredString.toLowerCase();
  
    console.log(reversedArrayFilteredStringLower);
  
    console.log('///');
  
    // 3. Chequear si es un palíndromo y devolver resultados.
  
    if (originalArrayFilteredStringLower == reversedArrayFilteredStringLower) {
        console.log(true);
        document.getElementById('palindrome-result').innerText = `🟢 "${document.getElementById('palindrome-input').value}" is a palindrome.`;
        document.getElementById('palindrome-result').style.visibility = 'visible';
        return true;
    } else if (originalArrayFilteredStringLower !== reversedArrayFilteredStringLower) {
        document.getElementById('palindrome-result').innerText = `🔴 "${document.getElementById('palindrome-input').value}" is not a palindrome.`;
        console.log(false);
        document.getElementById('palindrome-result').style.visibility = 'visible';
        return false;
    }
    
  }