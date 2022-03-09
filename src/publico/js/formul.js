/**
 * Colocando máscara nos campos CPF e telefone com JQuery
 */
 $(function() {
    $("#telWhats").mask('(00) 00000-0000');
    $("#cpf").mask('000.000.000-00');
});
//

/**
 * Validações no formulário HTML para garantir integridade antes da submissão do formulario
 */
function validarFormulario(){
    let ret = true;
    let msgToast = document.getElementById('msgToast')
    msgToast.innerHTML = "";

    let form = document.forms["dataForm"];

    if (form.nome.value.trim() == "") {
        msgToast.innerHTML = "Favor preencher o campo nome <br>";
        form.nome.focus();
        ret = false;
    }

    if (form.cpf.value.trim() == "") {
        msgToast.innerHTML = msgToast.innerHTML +  "Favor preencher o campo CPF <br>";
        form.cpf.focus();
        ret = false;
    }

     if (form.telWhats.value.trim() == ""){
        msgToast.innerHTML = msgToast.innerHTML + "Favor preencher o campo telefone";
        form.telWhats.focus();
        ret = false;
    }     

    if (!ret){
        let toastLive = document.getElementById('liveToast')
        let toast = new bootstrap.Toast(toastLive)
        toast.show()
    }

    return ret;
}