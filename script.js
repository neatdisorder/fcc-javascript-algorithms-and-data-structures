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

for (let i = 0; i < document.getElementsByClassName('back-btn').length; i++) {
    document.getElementsByClassName('back-btn')[i].addEventListener('click', function() {
        document.getElementById('palindrome-checker').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'none';
        document.getElementById('caesars-cipher').style.display = 'none';
        document.getElementById('telephone-number-validator').style.display = 'none';
        document.getElementById('home').style.display = 'block';
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