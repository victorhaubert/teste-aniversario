// Data de referência (29 de abril de 2021)
const referenceDate = new Date("2021-04-29");

function updateCounter() {
    const now = new Date();
    const timeDifference = now - referenceDate;

    const days = Math.floor(timeDifference / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

    document.getElementById("days").innerText = days;
    document.getElementById("hours").innerText = hours;
    document.getElementById("minutes").innerText = minutes;
    document.getElementById("seconds").innerText = seconds;
}

// Atualiza o contador a cada segundo
setInterval(updateCounter, 1000);

// Função para criar a animação do coração
function createHeartAnimation() {
    const heart = document.createElement("span");
    heart.innerHTML = "❤️";
    heart.classList.add("heart-animation");
    document.body.appendChild(heart);

    // Definindo a posição inicial do coração
    const startPosX = window.innerWidth / 2;
    const startPosY = window.innerHeight / 2;
    heart.style.left = startPosX + "px";
    heart.style.top = startPosY + "px";

    // Definindo o tamanho inicial do coração
    let size = 10;
    heart.style.fontSize = size + "px";

    // Função de animação para aumentar o tamanho do coração gradualmente
    function growHeart() {
        size += 10;
        heart.style.fontSize = size + "px";
        if (size <= 100) {
            requestAnimationFrame(growHeart);
        }
    }

    // Iniciar a animação
    requestAnimationFrame(growHeart);
}

// Criar a animação do coração quando a página for carregada
window.onload = createHeartAnimation;
