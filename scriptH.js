
function newFunction (data) {
    if(typeof data !== 'string') {
        alert('Your data is not a string');
        console.log('data is not a string')
    } else {
        let ourString = data.trim();
        if (data.length > 30) {
           console.log(ourString.substring(0, 31) + '...');
        }
    }
}

newFunction('      Необходимо выполнить задание, которое звучит:\n Если строка более 30 знаков - то после 30го символа часть текста скрывается и вместо них появляются три точки (...)');
newFunction(326);