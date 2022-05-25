/* Considere o fragmento de programa JavaScript abaixo.

var str = "123456789";
var p = /[^5-7]/g;
var resultado = str.match(p);

A variável resultado vai conter:
Esta pergunta é obrigatória* */

module.exports = () => {
    var str = "123456789";
    var p = /[^5-7]/g;
    var resultado = str.match(p);
    console.log({exercicio9: resultado})
}