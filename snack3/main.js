//Snack 3:
//Scrivere una funzione che accetti tre argomenti, un array e due numeri (a più piccolo di b).

const arrayNumbers = [1, 2, 4, 6, 8, 12, 19];
const minNum = 1;
const numMax  = 5;
numeri (minNum, numMax, arrayNumbers)

function numeri(min, max, array){
    let newArray = [];
    array.forEach((element, index) => {
        console.log(element, index);
        if (index <= max && index >= min){
            newArray.push(element)
        }
    });
    console.log(newArray);
    document.getElementById('nuovoArray').innerHTML = `Il nuovo array contentiene i numeri compresi tra il più piccolo e il
    più grande del vecchio array e sono: ${newArray}`

};
document.getElementById('vecchioArray').innerHTML = `Il tuo vecchio array è composto dai seguenti numeri: ${arrayNumbers}`

//La funzione ritornerà un nuovo array con i valori che hanno la posizione compresa tra i due numeri.

