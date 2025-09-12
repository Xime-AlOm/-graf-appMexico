function componentToHex(c) {
  const hex = c.toString(16);
  return hex.length === 1 ? "0" + hex : hex;
}

function rgbToHex(r, g, b) {
  return "#" + componentToHex(r) + componentToHex(g) + componentToHex(b);
}

function updateColor(barId, boxId, hexId, colorType) {
  const value = parseInt(document.getElementById(barId).value);

  let r = 0, g = 0, b = 0;

  switch (colorType) {
    case "verde":
      g = value;
      break;
    case "blanco":
      r = g = b = value;
      break;
    case "rojo":
      r = value;
      break;
  }

  const hex = rgbToHex(r, g, b);
  document.getElementById(boxId).style.backgroundColor = hex;
  document.getElementById(hexId).textContent = hex.toUpperCase();
}

// Eventos
document.getElementById("verde").addEventListener("input", () => {
  updateColor("verde", "verde-box", "verde-hex", "verde");
});

document.getElementById("blanco").addEventListener("input", () => {
  updateColor("blanco", "blanco-box", "blanco-hex", "blanco");
});

document.getElementById("rojo").addEventListener("input", () => {
  updateColor("rojo", "rojo-box", "rojo-hex", "rojo");
});

// Inicializar colores al cargar
window.onload = () => {
  updateColor("verde", "verde-box", "verde-hex", "verde");
  updateColor("blanco", "blanco-box", "blanco-hex", "blanco");
  updateColor("rojo", "rojo-box", "rojo-hex", "rojo");
};
