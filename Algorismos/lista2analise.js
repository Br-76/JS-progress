const {edGalho, edFolha } = require("./lista2.js");

function ajei (lista1, lista2){
    let lf = [];
    let pa1 = 0;
    let pa2 = 0 ;
    let at = 0; 

    while (pa1 < lista1.length && pa2 < lista2.length){
        let po1 = lista1[pa1];
        let po2 = lista2[pa2];

        if (po1.preco < po2.preco){
            lf[at] = po1;
            pa1++;
        } else {
            lf[at] = po2;
            pa2++;
        }
        at++;
    } while(pa1 < lista1.length){
        lf[at] = lista1[pa1];
        pa1++
        at++
    }
     while(pa2 < lista2.length){
        lf[at] = lista2[pa2];
        pa2++;
        at++
     }

    return lf;
}

console.log(ajei(edGalho, edFolha ))