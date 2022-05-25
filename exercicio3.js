/* Analise o script JS a seguir:
 
<script>
function xpto ( ) {
let n = 0;
return {next:
function ( )
{
if (n < 10) {
n += 2;
return {value:n/2, done:false}}
else {
return {value: -1, done: true}}
}
}
}
O resultado da execução desse código é: Esta pergunta é obrigatória * */

function xpto() {
    let n = 0;
    return {
        next:
            function () {
                if (n < 10) {
                    n += 2;
                    return { value: n / 2, done: false }
                }
                else {
                    return { value: -1, done: true }
                }
            }
    }
}

module.exports = () => {
    const fn = xpto();
    let response = fn.next();
    let print = ""
    while (!response.done){
        print += response.value + "/";
        response = fn.next();
    }

    console.log({exercicio3: print})
}