/*const btn = document.getElementById("send")*/
/* Se declara como constante el boton que es utilizado en el formulario para luego utilizarlo en la funcion*/

/* Se declara la funcion que va a estar encargada de tomar los datos y agregarlos a los elementos p del html. Esta misma funcion se llama desde el boton del html*/
/*function printform() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let message = document.getElementById("message").value;
  
    console.log(name)
    console.log(email)
    console.log(message)
  
    alert("Se rellenaran los campos debajo del formulario con los datos ingresados")
  
    document.getElementById("nameform").innerHTML = name;
    document.getElementById("emailform").innerHTML = email;
    document.getElementById("msgform").innerHTML = message;
}
*/


/* Solucion de Bing AI
function sendEmail() {
    var name = document.getElementById('name').value;
    var email = document.getElementById('email').value;
    var message = document.getElementById('message').value;
  
    var body = 'Nombre: ' + name + '\nEmail: ' + email + '\nMensaje: ' + message;
  
    // Usa la API de Gmail para enviar el correo electrónico
    var request = gapi.client.gmail.users.messages.send({
      'userId': 'me',
      'resource': {
        'raw': window.btoa(body).replace(/\+/g, '-').replace(/\//g, '_')
      }
    });
    request.execute();
  }

*/


/* Solucion Formspree */

const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData(this)
  const response = await fetch(this.action, {
    method: this.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    this.reset()
    alert('Gracias por contactarse, tu consulta sera respondida lo antes posible')
  }
}
