
const form = document.getElementById("form");
const displayResults = document.getElementById("output");

const romanNumerals = [
    { value: 1000, symbol: 'M' },
    { value: 900, symbol: 'CM' },
    { value: 500, symbol: 'D' },
    { value: 400, symbol: 'CD' },
    { value: 100, symbol: 'C' },
    { value: 90, symbol: 'XC' },
    { value: 50, symbol: 'L' },
    { value: 40, symbol: 'XL' },
    { value: 10, symbol: 'X' },
    { value: 9, symbol: 'IX' },
    { value: 5, symbol: 'V' },
    { value: 4, symbol: 'IV' },
    { value: 1, symbol: 'I' }
  ];



const showError = (str)=>{
    displayResults.parentElement.classList.add("error");
    displayResults.textContent = str;
}
const resetError = ()=> displayResults.parentElement.classList.contains("error") && displayResults.parentElement.classList.remove("error");
        

const validate = ()=>{
    const parseInput = form.number.value.trim();
   
    if(parseInput === "" || isNaN(Number(parseInput))){
        showError("Please enter a valid number");
        return false;
    }
    else if(parseInput <= 0){
        showError("Please enter a number greater than or equal to 1");
        return false;
    }
    else if(parseInput >= 4000){
        showError("Please enter a number less than or equal to 3999");
        return false;
    }

    return true;
}

const handleConversion = (arabicNumber)=>{
    let result = "";
   
    for(let i = 0; i < romanNumerals.length; i++){
       
        while(arabicNumber >= romanNumerals[i].value){
           
            result += romanNumerals[i].symbol;
            arabicNumber -= romanNumerals[i].value;
           
        }
    }

    return result;
}
const convertToRoman = (e)=>{
    e.preventDefault();
    if(!validate())return;
    resetError();
    
    const valueInput = Number(form.number.value.trim());
    const romanNumber = handleConversion(valueInput);
    displayResults.textContent = romanNumber;
}

form.addEventListener("submit", convertToRoman);