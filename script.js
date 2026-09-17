const botaoNao = document.getElementById("botaoNao");
const botaoSim = document.getElementById("botaoSim");

const telaPergunta = document.getElementById("telaPergunta");
const telaSim = document.getElementById("telaSim");


// ==========================================
// BOTÃO NÃO
// ==========================================

function fugir() {

    const largura = window.innerWidth;
    const altura = window.innerHeight;

    const larguraBotao = botaoNao.offsetWidth;
    const alturaBotao = botaoNao.offsetHeight;

    // Limites para o botão não sair da tela

    const margem = 20;

    const maxX = largura - larguraBotao - margem;
    const maxY = altura - alturaBotao - margem;

    const x = Math.max(
        margem,
        Math.random() * maxX
    );

    const y = Math.max(
        margem,
        Math.random() * maxY
    );


    // Faz o botão ficar solto na tela

    botaoNao.style.position = "fixed";

    botaoNao.style.left = `${x}px`;

    botaoNao.style.top = `${y}px`;

}


// Computador

botaoNao.addEventListener("mouseenter", fugir);


// Celular

botaoNao.addEventListener("touchstart", function(event) {

    event.preventDefault();

    fugir();

});


// Caso ela consiga clicar mesmo assim 😂

botaoNao.addEventListener("click", function(event) {

    event.preventDefault();

    fugir();

});


// ==========================================
// BOTÃO SIM
// ==========================================

botaoSim.addEventListener("click", function() {

    telaPergunta.classList.add("escondida");

    telaSim.classList.remove("escondida");

});


// ==========================================
// GALERIA
// ==========================================

const fotos = [

    {
        imagem: "fotos/foto1.jpg",
        legenda: "Eu te amo demais ❤️"
    },

    {
        imagem: "fotos/foto2.jpg",
        legenda: "Você é muito especial pra mim 🥰"
    },

    {
        imagem: "fotos/foto3.jpg",
        legenda: "Obrigado por ser incrível ❤️"
    }

];


let fotoAtual = 0;

const foto = document.getElementById("foto");
const legenda = document.getElementById("legenda");
const contador = document.getElementById("contador");

const anterior = document.getElementById("anterior");
const proxima = document.getElementById("proxima");


function mostrarFoto() {

    foto.src = fotos[fotoAtual].imagem;

    legenda.textContent = fotos[fotoAtual].legenda;

    contador.textContent =
        `${fotoAtual + 1} / ${fotos.length}`;

}


// FOTO ANTERIOR

anterior.addEventListener("click", function() {

    fotoAtual--;

    if (fotoAtual < 0) {
        fotoAtual = fotos.length - 1;
    }

    mostrarFoto();

});


// PRÓXIMA FOTO

proxima.addEventListener("click", function() {

    fotoAtual++;

    if (fotoAtual >= fotos.length) {
        fotoAtual = 0;
    }

    mostrarFoto();

});


// ==========================================
// DESLIZAR A FOTO NO CELULAR
// ==========================================

let toqueInicial = 0;

foto.addEventListener("touchstart", function(event) {

    toqueInicial = event.touches[0].clientX;

});


foto.addEventListener("touchend", function(event) {

    const toqueFinal = event.changedTouches[0].clientX;

    const distancia = toqueInicial - toqueFinal;


    // Deslizou para a esquerda

    if (distancia > 50) {

        fotoAtual++;

        if (fotoAtual >= fotos.length) {
            fotoAtual = 0;
        }

        mostrarFoto();

    }


    // Deslizou para a direita

    if (distancia < -50) {

        fotoAtual--;

        if (fotoAtual < 0) {
            fotoAtual = fotos.length - 1;
        }

        mostrarFoto();

    }

});