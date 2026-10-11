let history = [];


function calculator (a, operator, b) {
    let result = ''; 

    if(operator === '+') {
        result = a + b
        
    } else if (operator === '-') {
        result = a - b
        
    } else if (operator === '*') {
        result = a * b
       
    } else if (operator === '/') {
        result = b !== 0 ? a / b : 'This is not divisible'
       
    }

    const entry = ` ${a} ${operator} ${b} = ${result} `

     history.push(entry);

     displayHistory();

     return result;

}
function displayHistory(){
    if (history.length === 0){
        return 'There is no calculations stored'
    } else {
         history.forEach((nums, index) => {
            return`${index }: ${nums}`
         })
    }
    return history
}

//calculator(7, '-', 9)




