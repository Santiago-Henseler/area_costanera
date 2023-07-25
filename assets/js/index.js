var form = document.getElementById("formId");
function submitForm(event) {

    //Preventing page refresh
    event.preventDefault();
}

//Calling a function during form submission.
form.addEventListener('submit', submitForm);


function enviar_mensaje() {

    var tipo_evento = document.getElementById("tipo-evento").value;

    var nombre = document.getElementById("nombre").value;

    var cant = document.getElementById("cant").value;

    var txt = document.getElementById("campo1").value;

    var texto = `Hola me llamo ${nombre} 
    y estaba interesado en hacer mi ${tipo_evento} en Area Costanera,
    el evento seria para ${cant} personas.
    Mis aclaraciones/comentarios son: ${txt}
`;

    var tel = 541126247777;

    var url = `https://api.whatsapp.com/send?phone=${tel}&text=${texto}`;

    window.open(url);


}