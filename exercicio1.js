/* Considerando o código JavaScript a seguir, qual será o output do alerta?
let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) {txt += value};
}
function xpto (x) {
        x.forEach(funcao);
        return txt;
}
alert (xpto([0, 1, 1, 2, 3, 5]));
Esta pergunta é obrigatória * */

let txt = "";
function funcao(value, index, array) {
    if (index % 2 == 0) { txt += value };
}
function xpto(x) {
    x.forEach(funcao);
    return txt;
}
module.exports = () => console.log({exercicio1: xpto([0, 1, 1, 2, 3, 5])});