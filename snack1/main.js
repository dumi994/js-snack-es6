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

let biciLeggera = bici[0];

for (let i = 0; i < bici.length; i++){
    const bicycle = bici[i];
    // bici col peso minore
    if (bicycle.peso < biciLeggera.peso){
        biciLeggera = bicycle
    }
}
console.log(biciLeggera);
const {nome, peso} = biciLeggera;

const markup = `
<ul>
    <li>Nome: ${nome}</li>
    <li>Peso: ${peso}</li>
</ul>
`;

//Stampare a schermo la bici con peso minore utilizzando destructuring e template literal

document.querySelector('#bici').insertAdjacentHTML('beforeend', markup)
