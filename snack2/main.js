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
        punti:0,
        falliSubiti: 0,
    },
];
console.log(squadre);
//Generare numeri random al posto degli 0 nelle proprietà: Punti fatti e falli subiti.
function getRandomNUmber(min, max){
    return Math.random() * (max - min) + min;   
};
console.log(parseInt(getRandomNUmber(1, 100)));

squadre.falliSubiti += getRandomNUmber;
 

let falli = squadre.falliSubiti;
let punti = squadre.punti;
console.log(falli + punti);
/* console.log(squadre.number); */
//Infine usando la destrutturazione creiamo un nuovo array i cui elementi contengono solo nomi e falli subiti e stampiamo tutto in console.




