function CalculaMedia() {
  var nota1 = parseFloat(document.getElementByid("nota1").value);
  var nota2 = parseFloat(document.getElementByid("nota2").value);
  var nota3 = parseFloat(document.getElementByid("nota3").value);
  var nota4 = parseFloat(document.getElementByid("nota4").value);
  var nota5 = parseFloat(document.getElementByid("nota5").value);
}

function media(nota1, nota2, nota3, nota4, nota5) {
  var media = (
    (Number(nota1) +
      Number(nota2) +
      Number(nota3) +
      Number(nota4) +
      Number(nota5)) /
    5
  ).toFixed(2);

  alert("A nota final é: " + Media);
}
