
/* Ignore default method */

const $form = document.querySelector('form#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event) {
  event.preventDefault()
  const form = new FormData($form)
  const response = await fetch($form.action, {
    method: $form.method,
    body: form,
    headers: {
      'Accept': 'application/json'
    }
  })
  if (response.ok) {
    $form.reset()
    alert('Gracias por contactarse, tu consulta sera respondida lo antes posible')
  }
}
