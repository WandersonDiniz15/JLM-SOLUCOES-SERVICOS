function validar(){
    var nome = document.getElementById('patrimonio').value;
    var nome = document.getElementById('equipamento').value;
    var nome = document.getElementById('modelo').value;
    var nome = document.getElementById('serial').value;
    var nome = document.getElementById('unidade').value;
    var nome = document.getElementById('setor').value;
    var nome = document.getElementById('usuário').value;

    if(patrimonio == ""){
        document.getElementById('erro-patrimonio').innerHTML = "Ops! Informe o Numero do Patrimônio!";
    }
}