/* Analise a página Web a seguir, escrita em (HTML) e com a linguagem JavaScript.
<!DOCTYPE html>
<body>
<script language="Javascript">
function classificacao()
{
return function(obj1, obj2){
var a = (obj2["nota"] - obj1["nota"]);
return (a !== 0) ? a : (obj1["idade"] - obj2["idade"]);
}
}
var aprovados = [
{candidato: "Renata Soares", nota: 7.8, idade: 29},
{candidato: "Marcos Teixeira", nota: 7.8, idade: 26},
{candidato: "Priscila Gomes", nota: 7.8, idade: 30},
{candidato: "João Oliveira", nota: 7.8, idade: 27},
{candidato: "Adriana Telles", nota: 7.8, idade: 28}
];
aprovados.sort(classificacao());
document.write(aprovados[1].candidato);
</script>
</body>
</html>

Como pode ser observado, uma função foi criada para ordenar os candidatos do array “aprovados”, considerando como critério de ordenação nota e idade. Ao executar este script no navegador Google Chrome, versão 64, pergunta-se: qual candidato ficou em segundo lugar?
Esta pergunta é obrigatória* */

function classificacao() {
    return function (obj1, obj2) {
        var a = (obj2["nota"] - obj1["nota"]);
        return (a !== 0) ? a : (obj1["idade"] - obj2["idade"]);
    }
}
var aprovados = [
    { candidato: "Renata Soares", nota: 7.8, idade: 29 },
    { candidato: "Marcos Teixeira", nota: 7.8, idade: 26 },
    { candidato: "Priscila Gomes", nota: 7.8, idade: 30 },
    { candidato: "João Oliveira", nota: 7.8, idade: 27 },
    { candidato: "Adriana Telles", nota: 7.8, idade: 28 }
];
aprovados.sort(classificacao());

module.exports = () => { console.log({exercicio7: aprovados[1].candidato}) }