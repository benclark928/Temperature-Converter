const celciusInput = document.querySelector('#celcius > input');
const fahrenheitInput = document.querySelector('#fahrenheit > input');
const kelvinInput = document.querySelector('#kelvin > input');
// this is cashing the dom and the querySelector is saying get the input inside the clecius div 

function roundNumbers(num) {
    return Math.round(num*100)/100;

}
// this times the small number by 100 rounds that to a whole number and then divides it by 100 

function celciusToOther() {
    const cTemp = parseFloat(celciusInput.value);       // this gets the number value of celcius 
    const fTemp = (cTemp * (9/5)) +32;                  // this is the fomula for fahrenheit from celcius
    const kTemp = cTemp + 273.15; 
    fahrenheitInput.value = roundNumbers(fTemp); 
    kelvinInput.value = roundNumbers(kTemp);          // this puts the kTemp into the kelvin box
}              
// parseFloat changes cTemps value to a decimal number from a string so you can calculate the new numbers

function fahrenheitToOther() {
    const fTemp = parseFloat(fahrenheitInput.value); 
    const cTemp = (fTemp -32) * (5/9);                  // fomuala for celcius to fahrenheit
    const kTemp = (fTemp + 459.67) *5/9; 
    celciusInput.value = roundNumbers(cTemp); 
    kelvinInput.value = roundNumbers(kTemp); 
}

function kelvinToOther() {
    const kTemp = parseFloat(kelvinInput.value); 
    const cTemp = kTemp - 273.15;              
    const fTemp = 9/5 * (kTemp - 273) + 32; 
    celciusInput.value = roundNumbers(cTemp); 
    fahrenheitInput.value = roundNumbers(fTemp); 
}

// event listeners watch for any sort of action the user of the page does. For this it is any input on the page
celciusInput.addEventListener('input', celciusToOther);
fahrenheitInput.addEventListener('input', fahrenheitToOther); 
kelvinInput.addEventListener('input', kelvinToOther); 