let textoIngresado = document.querySelector(".encriptar__input");
let textoDeSalida = document.getElementById("codificado");

document.querySelector(".codificado").style.display = "none";

const encriptar = () => {
  //Regex para detectar mayúsculas y acentos
  let regex = /^[a-z]*$/;

  let texto = textoIngresado.value.trim();

  if (!regex.test(texto)) {
    textoDeSalida.textContent =
      "El texto ingresado tiene mayúsculas, acentos o numeros";
    document.querySelector(".resultado__buscar").style.display = "none";
    document.querySelector(".codificado").style.display = "flex";
  } else {
    let textoSeparado = texto.split("");

    textoSeparado.map((value, index) => {
      if (textoSeparado[index] === "a") {
        textoSeparado[index] = "ai";
      } else if (textoSeparado[index] === "e") {
        textoSeparado[index] = "enter";
      } else if (textoSeparado[index] === "i") {
        textoSeparado[index] = "imes";
      } else if (textoSeparado[index] === "o") {
        textoSeparado[index] = "ober";
      } else if (textoSeparado[index] === "u") {
        textoSeparado[index] = "ufat";
      }
      return textoSeparado;
    });

    textoDeSalida.textContent = textoSeparado.join("");
    textoDeSalida.value = textoSeparado.join("");

    document.querySelector(".resultado__buscar").style.display = "none";
    document.querySelector(".codificado").style.display = "flex";
  }
};

const desencriptar = () => {
  let texto = textoIngresado.value;
  let desencriptado = texto
    .replaceAll("ai", "a")
    .replaceAll("enter", "e")
    .replaceAll("imes", "i")
    .replaceAll("ober", "o")
    .replaceAll("ufat", "u");

  textoDeSalida.textContent = desencriptado;
};

const copiar = () => {
  textoIngresado.value = textoDeSalida.value;
};

document.getElementById("encriptar").addEventListener("click", encriptar);
document.getElementById("copiar").addEventListener("click", copiar);
document.getElementById("desencriptar").addEventListener("click", desencriptar);
