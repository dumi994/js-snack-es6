//Snack 1:
//Creare un array di oggetti, ogni oggetto descriverà una bici da corsa con le seguenti proprietà: -nome -peso

let bici = [
    {
        nome:'MTB Conor',
        peso: 6,
    },
    {
        nome: 'ELOPS 520',
        peso: 7.5,
    },
    {
        nome: 'DURANGO',
        peso: 6,
    },
    {
        nome:'BTWIN' ,
        peso: 11,
    },
    {
        nome:"VIVOBIKE" ,
        peso: 10,
    },
    {
        nome: 'SMOBY',
        peso: 1.5,
    },

];
console.log(bici);

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal
let biciLeggere = [];
for (let i = 0; i < bici.length; i++){
    let biciCiclate = bici[i];
    console.log(biciCiclate.peso);
    if (biciCiclate.peso < 10){
        biciLeggere.push(biciCiclate.nome);
    }
}
console.log(`le bici leggere pesano rispettivametne  ${biciLeggere}`);
