const btn = document.getElementById("send")
/* Se declara como constante el boton que es utilizado en el formulario para luego utilizarlo en la funcion*/

/* Se declara la funcion que va a estar encargada de tomar los datos y agregarlos a los elementos p del html. Esta misma funcion se llama desde el boton del html*/
function printform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
    /* Los comandos console.log son para verificar que las variables sean tomadas correctamente*/
    console.log(name)
    console.log(email)
    console.log(message)
    /* Mensaje de alerta de que pasara antes de modificar el html*/
    alert("Se rellenaran los campos debajo del formulario con los datos ingresados")
    /* Los siguientes comandos son para modificar los objetos p html*/
    document.getElementById("nameform").innerHTML = name;
    document.getElementById("emailform").innerHTML = email;
    document.getElementById("msgform").innerHTML = message;
}