/* Considere o seguinte código JavaScript:

let o = {one:1,two:2,three:3};
for(let p in o) console.log(p);

Ao final da execução, quais valores serão impressos?
Esta pergunta é obrigatória* */
module.exports = () => {
    let o = { one: 1, two: 2, three: 3 };
    let text = "";
    for (let p in o) text += p + ",";
    console.log({exercicio5: text})
}