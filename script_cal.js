let operasi = "";
let angka1 = 0;
let angka2 = 0;
const input = document.getElementById("nilai");
const tombol = document.getElementsByClassName("tombol");
const reset = document.getElementById("ulang");

for (let i = 0; i < tombol.length; i++) {
  tombol[i].addEventListener("click", function () {
    if (
      tombol[i].innerText === "+" ||
      tombol[i].innerText === "-" ||
      tombol[i].innerText === "*" ||
      tombol[i].innerText === "/"
    ) {
      operasi = tombol[i].innerText;
      angka1 = input.value;
      input.value = 0;
    } else if (tombol[i].innerText === "=") {
      angka2 = input.value;

      if (operasi === "+")
        input.value = parseInt(angka1) + parseInt(angka2);
      if (operasi === "-")
        input.value = parseInt(angka1) - parseInt(angka2);
      if (operasi === "*")
        input.value = parseInt(angka1) * parseInt(angka2);
      if (operasi === "/")
        input.value = parseInt(angka1) / parseInt(angka2);
    } else {
      const currentValue = parseInt(input.value);
      if (currentValue === 0) {
        input.value = tombol[i].innerText;
      } else {
        input.value = currentValue + tombol[i].innerText;
      }
    }
  });
}

reset.addEventListener("click", function () {
  operasi = "";
  angka1 = 0;
  angka2 = 0;
  input.value = 0;
});
