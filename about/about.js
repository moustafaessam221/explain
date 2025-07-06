function initAbout() {
  let aboutElement = document.getElementById("about");
  aboutElement.onclick = function change() {
    aboutElement.style.fontSize = "50px";
    aboutElement.style.backgroundColor = "yellow";
    aboutElement.style.color = "red";
  };
}

function renderAbout() {
  fetch("./about/about.html")
    .then((response) => response.text())
    .then((html) => {
      root.innerHTML = html;

      const script = document.createElement("script");
      script.src = "./about/about.js";
      script.onload = () => {
        initAbout();
      };
      document.body.appendChild(script);
    });
}
