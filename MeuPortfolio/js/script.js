const form = document.querySelector('form');

form.addEventListener('submit', function (e) {
  e.preventDefault();
  const name = document.getElementById('name').value;
  const email = document.getElementById('email').value;
  const message = document.getElementById('message').value;

  alert(`Obrigado pelo contato, ${name}! Responderemos em breve via ${email}.`);
  form.reset();
});
