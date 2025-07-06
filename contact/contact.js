// wrtie code inside init for it to work

function initContact() {
  let contactElement = document.getElementById("contact");
  contactElement.onclick = function change() {
    contactElement.style.fontSize = "50px";
    contactElement.style.backgroundColor = "yellow";
    contactElement.style.color = "red";
  };

  let email = document.getElementById("email");
  let form = document.getElementById("form");
  form.preventDefault();
  email.onchange = function change() {
    console.log(email.value);
    email.style.fontSize = "50px";
    email.style.backgroundColor = "yellow";
    email.style.color = "red";
  };
}

function renderContact() {
  fetch("./contact/contact.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "./contact/contact.js";
      script.onload = () => {
        initContact();
      };
      document.body.appendChild(script);
    });
}
