const circulo = document.querySelector('.circle');
function mudarCor() {
    circulo.style.backgroundColor = "green";
    circulo.style.borderColor = "green";
}
circulo.addEventListener('mouseenter', mudarCor);
function removeCor() {
    circulo.removeAttribute("style")
}
circulo.addEventListener('mouseleave', removeCor);
var comprimento = window.innerWidth;
var altura = window.innerHeight;
console.log(comprimento)
console.log(altura)
const area = document.body;
function coordenadasMouse(j) {
    var posicaoHorizontal = comprimento + j.clientY + 10;
    var posicaoVertical= altura - j.clientX - 10;
    circulo.style.left = posicaoHorizontal + 'px';
    circulo.style.top = posicaoVertical + 'px';
}
area.addEventListener('mousemove', coordenadasMouse);

