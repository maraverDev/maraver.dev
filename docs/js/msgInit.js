(function () {
  emailjs.init("xJLq2HTHTkS2qw_jZ"); // Reemplaza "YOUR_USER_ID" con tu ID de usuario de EmailJS
})();

function sendEmail(event) {
  event.preventDefault();
  
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const msg = document.getElementById("msg").value;

  if (!name || !email || !msg) {
    alert("Por favor, completa todos los campos antes de enviar.");
    return;
  }
  const contactForm = document.getElementById("contact");
  const formData = new FormData(contactForm);

  emailjs.send("service_py0vl9h", "template_y019euc", {
      from_name: formData.get("name"),
      from_email: formData.get("email"),
      message: formData.get("msg"),
    })
    .then(
      function (response) {
        console.log("SUCCESS!", response.status, response.text);
        alert("El mensaje se ha enviado correctamente!");
      },
      function (error) {
        console.log("FAILED...", error);
        alert("El mensaje no se pudo enviar. Por favor, intenta de nuevo.");
      }
    );
}
