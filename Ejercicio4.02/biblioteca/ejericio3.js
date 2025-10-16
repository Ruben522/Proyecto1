"use stric"

const crearParrafos = () => {
  for (let i = 1; i <= 5; i++) {
    const p = document.createElement("p");
    p.textContent = `Párrafo ${i}`;
    document.body.appendChild(p);
  }
};

