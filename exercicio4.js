/* Considere o seguinte código JavaScript:

var exemplo = "A";
outro = "A";
function minhaFuncao( ){
var exemplo = "B";
return exemplo;
}
function minhaFuncao2( ){
outro = "B";
return outro;
}
console.log(exemplo);
console.log(minhaFuncao( ));
console.log(outro);
console.log(minhaFuncao2);
console.log(outro);

Ao final da execução, quais valores serão impressos?Esta pergunta é obrigatória * */

var exemplo = "A";
outro = "A";
function minhaFuncao() {
    var exemplo = "B";
    return exemplo;
}
function minhaFuncao2() {
    outro = "B";
    return outro;
}

module.exports = () => {
    let text = "";
    text += exemplo + ","
    text += minhaFuncao() + ","
    text += outro + ","
    text += minhaFuncao2() + ","
    text += outro + "."
    console.log({ exercicio4: text });
}