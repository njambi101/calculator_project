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
        return 'No history yet.'
    } else {
         history.forEach((nums, index) => {
            console.log(`${index }: ${nums}`)
         })
    }
}

//calculator(7, '-', 9)
calculator(8, '+', 6)


