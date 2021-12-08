//data do evento nao pdoe ser anterior a data atual
//participantes tem que ser maior de 18 anos
//listar participantes e palestrantes do evento
//quantidade maxima de 100 pessoas

let DataHoje = new Date (2021-12-8)
let DataEvento = new Date (2021-12-12)
if (DataEvento < DataHoje){
    console.log("É possivel cadastrar o evento, data dentro do prazo necessário")
    
} else {
    console.log("Não é possivel cadastrar o evento, data fora do prazo necessário")

}

let Idade = 23;
if(Idade >= 18){
    console.log("Idade dentro do minimo necessário para o cadastro")

} else {
    console.log("Idade fora do minimo necessário para o cadastro")

}

let ListadePessoas = ["Miguel","Arthur","Helena","Alice","Laura","Gabriel","Manuela","Lucas","Gabriela","José"]
let ListadePalestrantes = ["Gael","Cecilia","Marcos","Jessica","Heitor"]
if(ListadePessoas.length + ListadePalestrantes.length < 100){
    console.log("É possivel cadastrar mais pessoas, maximo de 100 pessoas")

} else {
    console.log("Não foi possivel fazer o cadastro, limite maximo de pessoas excedido")

}

