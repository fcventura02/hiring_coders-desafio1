/* Analise os extratos de uma página Web incluindo o código JS exibido a seguir. Qual será o valor no elemento de id=“box” após a operação?

...
<p id="box">Valores</p>
...
<script>
function XPTO(quantos) {
const x = ["AB", "BC, "CD, "DE"];
str = " ";
for (i = quantos -1; i >=0; i--) {
str += " " + x[i]; }
return str;
}
...
document.getElementById("box").innerHTML += XPTO(4);
</script>Esta pergunta é obrigatória * */

module.exports= ()=>{
    function XPTO(quantos) {
        const x = ["AB", "BC", "CD", "DE"];
        str = " ";
        for (i = quantos -1; i >=0; i--) {
        str += " " + x[i]; }
        return str;
        }
        console.log({exercicio6: XPTO(4)})
}