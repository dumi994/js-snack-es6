//Creare un array di oggetti di squadre di calcio. Ogni squadra avrà diverse proprietà:nome, punti fatti, falli subiti
//Nome sarà l’unica proprietà da compilare, le altre saranno tutte settate a 0.
let squadre = [
    {
        nome: 'Stribugliano',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'CastelAzzara',
        punti: 0,
        falliSubiti:0,
    },
    {
        nome: 'Grosseto',
        punti: 0,
        falliSubiti: 0,
    },
    {
        nome: 'Roma Primavera',
        punti: 0,
        falliSubiti: 0,
    },
];
console.log(squadre);
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandomNUmber(min, max){
    return Math.ceil(Math.random() * (max - min)) + min;   
};
getRandomNUmber(1, 100)
/* console.log(parseInt(getRandomNUmber(1, 100))); */

let questaSquadra;
for (let i = 0; i < squadre.length; i++){
    questaSquadra = squadre[i];
    
    if (questaSquadra.falliSubiti == 0){
        getRandomNUmber(1, 100);
    }
    /* const puntiSquadra = {nome, falliSubiti} = questaSquadra; */
   
    questaSquadra.falliSubiti = getRandomNUmber(1, 100);
    
    console.log(questaSquadra);
};

const {nome, falliSubiti} = questaSquadra;
const markup = `
<ul>
    <li>Nome: ${nome}</li>
    <li>Falli subiti: ${falliSubiti}</li>
</ul>
`
document.querySelector('#squadre').insertAdjacentHTML('beforeend', markup)

