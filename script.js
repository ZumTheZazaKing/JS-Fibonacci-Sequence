let numbers = document.getElementById('numbers');

let number1 = 0;

let number2 = 1;

let resultNumber;



function confirm(){

    let count = 0;

    let numbersCont = document.getElementById('containerNumbers');

    numbersCont.classList.remove('hide');

    let userCount = document.getElementById('userCount').value;


    while(count <= userCount){

        numbers.innerHTML += number1 + ", ";
    
        resultNumber = number1 + number2;
    
        number1 = number2;
    
        number2 = resultNumber;
    
        count++
    
    }

}


