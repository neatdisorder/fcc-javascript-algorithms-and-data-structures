// BOTONES SPA

document.getElementById('palindrome-checker-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('palindrome-checker').style.display = 'flex';
});

document.getElementById('roman-numeral-converter-btn').addEventListener('click', function() {
    document.getElementById('home').style.display = 'none';
    document.getElementById('roman-numeral-converter').style.display = 'flex';
});

for (let i = 0; i < document.getElementsByClassName('back-btn').length; i++) {
    document.getElementsByClassName('back-btn')[i].addEventListener('click', function() {
        document.getElementById('palindrome-checker').style.display = 'none';
        document.getElementById('roman-numeral-converter').style.display = 'none';
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