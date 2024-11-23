    const starContainer = document.getElementById('star-container');

    // Função para criar uma estrela
    function createStar() {
    const star = document.createElement('div');
    star.classList.add('star');

    // Posicionar aleatoriamente na tela
    const x = Math.random() * window.innerWidth;
    const y = Math.random() * window.innerHeight;

    star.style.left = `${x}px`;
    star.style.top = `${y}px`;

    // Definir um atraso aleatório para a animação
    const delay = Math.random() * 5; // Até 5 segundos
    star.style.animationDelay = `${delay}s`;

    starContainer.appendChild(star);
    }

    // Gerar múltiplas estrelas
    const numberOfStars = 100; // Ajuste a quantidade de estrelas
    for (let i = 0; i < numberOfStars; i++) {
    createStar();
    }
