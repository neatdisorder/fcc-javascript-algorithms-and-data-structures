document.getElementById('roman-button').addEventListener('click', () => convertToRoman(document.getElementById('roman-input').value));

function convertToRoman(num) {

    let toConvert = num;
    let romanResult = "";

    if (toConvert < 9999) {

        while (toConvert >= 1000) {
            romanResult += "M";
            toConvert -= 1000;
            console.log(toConvert);
        }

        while (toConvert >= 900 && toConvert <= 999) {
            romanResult += "CM";
            toConvert -= 900;
            console.log(toConvert);
        }

        while (toConvert < 900 && toConvert >= 500) {
            romanResult += "D";
            toConvert -= 500;
        }

        while (toConvert >= 400 && toConvert <= 499) {
            romanResult += "CD";
            toConvert -= 400;
        }

        while (toConvert < 400 && toConvert >= 100) {
            romanResult += "C";
            toConvert -= 100;
        }
        
        while (toConvert >= 90 && toConvert <= 99) {
            romanResult += "XC";
            toConvert -= 90;
            console.log(toConvert);
        }

        while (toConvert <= 89 && toConvert >= 50) {
            romanResult += "L";
            toConvert -= 50;
        }

        while (toConvert >= 40 && toConvert <= 49) {
            romanResult += "XL";
            toConvert -= 40;
        }

        while (toConvert < 39 && toConvert >= 10) {
            romanResult += "X";
            toConvert -= 10;
        }

        while (toConvert == 9) {
            romanResult += "IX";
            toConvert -= 9;
            console.log(toConvert);
        }

        while (toConvert < 9 && toConvert >= 5) {
            romanResult += "V";
            toConvert -= 5;
        }

        while (toConvert === 4) {
            romanResult += "IV";
            toConvert -= 4;
        }

        while (toConvert < 4 && toConvert > 0) {
            romanResult += "I";
            toConvert -= 1;
        }

        console.log(romanResult);

        document.getElementById('roman-result').innerText = `🏛️ ${document.getElementById('roman-input').value} in roman numbers is "${romanResult}".`;
        document.getElementById('roman-result').style.visibility = 'visible';

        return romanResult;

    } else {

        document.getElementById('roman-result').innerText = `🔴 Please input a number between 1 and 9999.`;
        document.getElementById('roman-result').style.visibility = 'visible';

    }
    
}