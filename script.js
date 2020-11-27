// BOTONES SPA

document.getElementById('palindrome-checker-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('palindrome-checker').style.display = 'flex';
});

document.getElementById('roman-numeral-converter-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('roman-numeral-converter').style.display = 'flex';
});

document.getElementById('caesars-cipher-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('caesars-cipher').style.display = 'flex';
});

document.getElementById('telephone-number-validator-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('telephone-number-validator').style.display = 'flex';
});

document.getElementById('cash-register-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('cash-register').style.display = 'flex';
});

// BOTON <- BACK

for (let i = 0; i < document.getElementsByClassName('back-btn').length; i++) {
    document.getElementsByClassName('back-btn')[i].addEventListener('click', function() {
        document.getElementById('palindrome-checker').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'none';
        document.getElementById('cash-register').style.display = 'none';
        document.getElementById('palindrome-result').style.visibility = 'hidden';
        document.getElementById('roman-result').style.visibility = 'hidden';
        document.getElementById('caesars-result').style.visibility = 'hidden';
        document.getElementById('telephone-result').style.visibility = 'hidden';
        document.getElementById('cash-result').style.visibility = 'hidden';
        document.getElementById('home').style.display = 'block';
        // CLOSE DROPDOWNS
        document.getElementById('palindrome-code').style.display = 'none';
        document.getElementById('show-palindrome-code').innerText = '▾ View code solution';
        palindromeCode = false;
        document.getElementById('palindrome-tests').style.display = 'none';
        document.getElementById('show-palindrome-tests').innerText = '▾ View provided test cases';
        palindromeTests = false;
        document.getElementById('roman-code').style.display = 'none';
        document.getElementById('show-roman-code').innerText = '▾ View code solution';
        romanCode = false;
        document.getElementById('roman-tests').style.display = 'none';
        document.getElementById('show-roman-tests').innerText = '▾ View provided test cases';
        romanTests = false;
        document.getElementById('caesars-code').style.display = 'none';
        document.getElementById('show-caesars-code').innerText = '▾ View code solution';
        caesarsCode = false;
        document.getElementById('caesars-tests').style.display = 'none';
        document.getElementById('show-caesars-tests').innerText = '▾ View provided test cases';
        caesarsTests = false;
        document.getElementById('telephone-code').style.display = 'none';
        document.getElementById('show-telephone-code').innerText = '▾ View code solution';
        telephoneCode = false;
        document.getElementById('telephone-tests').style.display = 'none';
        document.getElementById('show-telephone-tests').innerText = '▾ View provided test cases';
        telephoneTests = false;
        document.getElementById('cash-code').style.display = 'none';
        document.getElementById('show-cash-code').innerText = '▾ View code solution';
        cashCode = false;
        document.getElementById('cash-tests').style.display = 'none';
        document.getElementById('show-cash-tests').innerText = '▾ View provided test cases';
        cashTests = false;
    });
}

// PALINDROME DROPDOWNS

let palindromeCode = false;
let palindromeTests = false;

document.getElementById('show-palindrome-code').addEventListener('click', function() {
    if (palindromeCode == false) {
        document.getElementById('palindrome-code').style.display = 'block';
        document.getElementById('show-palindrome-code').innerText = '▴ Close code solution';
        palindromeCode = true;
    } else if (palindromeCode == true) {
        document.getElementById('palindrome-code').style.display = 'none';
        document.getElementById('show-palindrome-code').innerText = '▾ View code solution';
        palindromeCode = false;
    }
});

document.getElementById('show-palindrome-tests').addEventListener('click', function() {
    if (palindromeTests == false) {
        document.getElementById('palindrome-tests').style.display = 'block';
        document.getElementById('show-palindrome-tests').innerText = '▴ Close provided test cases';
        palindromeTests = true;
    } else if (palindromeTests == true) {
        document.getElementById('palindrome-tests').style.display = 'none';
        document.getElementById('show-palindrome-tests').innerText = '▾ View provided test cases';
        palindromeTests = false;
    }
});

// ROMAN DROPDOWNS

let romanCode = false;
let romanTests = false;

document.getElementById('show-roman-code').addEventListener('click', function() {
    if (romanCode == false) {
        document.getElementById('roman-code').style.display = 'block';
        document.getElementById('show-roman-code').innerText = '▴ Close code solution';
        romanCode = true;
    } else if (romanCode == true) {
        document.getElementById('roman-code').style.display = 'none';
        document.getElementById('show-roman-code').innerText = '▾ View code solution';
        romanCode = false;
    }
});

document.getElementById('show-roman-tests').addEventListener('click', function() {
    if (romanTests == false) {
        document.getElementById('roman-tests').style.display = 'block';
        document.getElementById('show-roman-tests').innerText = '▴ Close provided test cases';
        romanTests = true;
    } else if (romanTests == true) {
        document.getElementById('roman-tests').style.display = 'none';
        document.getElementById('show-roman-tests').innerText = '▾ View provided test cases';
        romanTests = false;
    }
});

// CAESARS CIPHER DROPDOWNS

let caesarsCode = false;
let caesarsTests = false;

document.getElementById('show-caesars-code').addEventListener('click', function() {
    if (caesarsCode == false) {
        document.getElementById('caesars-code').style.display = 'block';
        document.getElementById('show-caesars-code').innerText = '▴ Close code solution';
        caesarsCode = true;
    } else if (caesarsCode == true) {
        document.getElementById('caesars-code').style.display = 'none';
        document.getElementById('show-caesars-code').innerText = '▾ View code solution';
        caesarsCode = false;
    }
});

document.getElementById('show-caesars-tests').addEventListener('click', function() {
    if (caesarsTests == false) {
        document.getElementById('caesars-tests').style.display = 'block';
        document.getElementById('show-caesars-tests').innerText = '▴ Close provided test cases';
        caesarsTests = true;
    } else if (caesarsTests == true) {
        document.getElementById('caesars-tests').style.display = 'none';
        document.getElementById('show-caesars-tests').innerText = '▾ View provided test cases';
        caesarsTests = false;
    }
});

// TELEPHONE NUMBER VALIDATOR

let telephoneCode = false;
let telephoneTests = false;

document.getElementById('show-telephone-code').addEventListener('click', function() {
    if (telephoneCode == false) {
        document.getElementById('telephone-code').style.display = 'block';
        document.getElementById('show-telephone-code').innerText = '▴ Close code solution';
        telephoneCode = true;
    } else if (telephoneCode == true) {
        document.getElementById('telephone-code').style.display = 'none';
        document.getElementById('show-telephone-code').innerText = '▾ View code solution';
        telephoneCode = false;
    }
});

document.getElementById('show-telephone-tests').addEventListener('click', function() {
    if (telephoneTests == false) {
        document.getElementById('telephone-tests').style.display = 'block';
        document.getElementById('show-telephone-tests').innerText = '▴ Close provided test cases';
        telephoneTests = true;
    } else if (telephoneTests == true) {
        document.getElementById('telephone-tests').style.display = 'none';
        document.getElementById('show-telephone-tests').innerText = '▾ View provided test cases';
        telephoneTests = false;
    }
});

// CASH REGISTER

let cashCode = false;
let cashTests = false;

document.getElementById('show-cash-code').addEventListener('click', function() {
    if (cashCode == false) {
        document.getElementById('cash-code').style.display = 'block';
        document.getElementById('show-cash-code').innerText = '▴ Close code solution';
        cashCode = true;
    } else if (cashCode == true) {
        document.getElementById('cash-code').style.display = 'none';
        document.getElementById('show-cash-code').innerText = '▾ View code solution';
        cashCode = false;
    }
});

document.getElementById('show-cash-tests').addEventListener('click', function() {
    if (cashTests == false) {
        document.getElementById('cash-tests').style.display = 'block';
        document.getElementById('show-cash-tests').innerText = '▴ Close provided test cases';
        cashTests = true;
    } else if (cashTests == true) {
        document.getElementById('cash-tests').style.display = 'none';
        document.getElementById('show-cash-tests').innerText = '▾ View provided test cases';
        cashTests = false;
    }
});

// APARICIÓN DE DIVS CON HASH

console.log(typeof location.hash);
console.log(location.hash);

switch (location.hash) {

    case '#home':
        document.getElementById('palindrome-checker').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'none';
        document.getElementById('cash-register').style.display = 'none';
        document.getElementById('palindrome-result').style.visibility = 'hidden';
        document.getElementById('roman-result').style.visibility = 'hidden';
        document.getElementById('caesars-result').style.visibility = 'hidden';
        document.getElementById('telephone-result').style.visibility = 'hidden';
        document.getElementById('cash-result').style.visibility = 'hidden';
        document.getElementById('home').style.display = 'block';
        break;

    case '#palindrome-checker':
        document.getElementById('home').style.display = 'none';
        document.getElementById('palindrome-checker').style.display = 'flex';
        break;

    case '#show-palindrome-tests':
        document.getElementById('home').style.display = 'none';
        document.getElementById('palindrome-checker').style.display = 'flex';
        document.getElementById('palindrome-tests').style.display = 'block';
        document.getElementById('show-palindrome-tests').innerText = '▴ Close provided test cases';
        palindromeTests = true;
        break;

    case '#show-palindrome-code':
        document.getElementById('home').style.display = 'none';
        document.getElementById('palindrome-checker').style.display = 'flex';
        document.getElementById('palindrome-code').style.display = 'block';
        document.getElementById('show-palindrome-code').innerText = '▴ Close code solution';
        palindromeCode = true;
        break;

    case '#roman-numeral-converter':
        document.getElementById('home').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'flex';
        break;

    case '#show-roman-tests':
        document.getElementById('home').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'flex';
        document.getElementById('roman-tests').style.display = 'block';
        document.getElementById('show-roman-tests').innerText = '▴ Close provided test cases';
        romanTests = true;
        break;

    case '#show-roman-code':
        document.getElementById('home').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'flex';
        document.getElementById('roman-code').style.display = 'block';
        document.getElementById('show-roman-code').innerText = '▴ Close code solution';
        romanCode = true;
        break;

    case '#caesars-cipher':
        document.getElementById('home').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'flex';
        break;
    case '#show-caesars-tests':
        document.getElementById('home').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'flex';
        document.getElementById('caesars-tests').style.display = 'block';
        document.getElementById('show-caesars-tests').innerText = '▴ Close provided test cases';
        caesarsTests = true;
        break;

    case '#show-caesars-code':
        document.getElementById('home').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'flex';
        document.getElementById('caesars-code').style.display = 'block';
        document.getElementById('show-caesars-code').innerText = '▴ Close code solution';
        caesarsCode = true;
        break;

    case '#telephone-number-validator':
        document.getElementById('home').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'flex';
        break;

    case '#show-telephone-tests':
        document.getElementById('home').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'flex';
        document.getElementById('telephone-tests').style.display = 'block';
        document.getElementById('show-telephone-tests').innerText = '▴ Close provided test cases';
        telephoneTests = true;
        break;

    case '#show-telephone-code':
        document.getElementById('home').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'flex';
        document.getElementById('telephone-code').style.display = 'block';
        document.getElementById('show-telephone-code').innerText = '▴ Close code solution';
        telephoneCode = true;
        break;

    case '#cash-register':
        document.getElementById('home').style.display = 'none';
        document.getElementById('cash-register').style.display = 'flex';
        break;
    
    case '#show-cash-tests':
        document.getElementById('home').style.display = 'none';
        document.getElementById('cash-register').style.display = 'flex';
        document.getElementById('cash-tests').style.display = 'block';
        document.getElementById('show-cash-tests').innerText = '▴ Close provided test cases';
        cashTests = true;
        break;

    case '#show-cash-code':
        document.getElementById('home').style.display = 'none';
        document.getElementById('cash-register').style.display = 'flex';
        document.getElementById('cash-code').style.display = 'block';
        document.getElementById('show-cash-code').innerText = '▴ Close code solution';
        cashCode = true;
        break;

}