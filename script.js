const dataLowercase ="azertyuiopqsdfghjklmwxcvbn";
const dataUppercase = dataLowercase.toUpperCase();
const dataNumbers = "0123456789";
const dataSymbols = "^$ù*,;:!?./§%µ¨£&\"'(-_@)";

let data = [];
const passwordLength= document.getElementById("display-password-length");
const passwordOutput= document.getElementById("password-output");
let password = '';

function generatePassword()
{
    if(lowercase.checked) data.push(...dataLowercase);
    if(uppercase.checked) data.push(...dataUppercase);
    if(numbers.checked) data.push(...dataNumbers);
    if(symbols.checked) data.push(...dataSymbols);
    
    for(i=0; i<passwordLength.value ; i++)
    {
        password += data[Math.floor(Math.random()*data.length)];
    }

    passwordOutput.value = password;
    password = '';
    passwordOutput.select();

    generateButton.textContent = 'Copied !';
    document.execCommand("copy");
    console.log(passwordLength.value)
    setTimeout(() =>{generateButton.textContent = 'Génerer un mot de passe'
        },
    2000);

    
}

generateButton.addEventListener('click', generatePassword);