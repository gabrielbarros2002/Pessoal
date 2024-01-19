function mudarPosicaoNao() {
    // Gera números aleatórios para as posições top e left
    const topPosition = Math.floor(Math.random() * (window.innerHeight - 50)); // Subtrai 50 para evitar que o botão vá muito para baixo
    const leftPosition = Math.floor(Math.random() * (window.innerWidth - 50)); // Subtrai 50 para evitar que o botão vá muito para a direita

    // Atualiza as propriedades de estilo do botão "Não"
    const naoButton = document.getElementById('naoButton');
    naoButton.style.position = 'absolute';
    naoButton.style.top = topPosition + 'px';
    naoButton.style.left = leftPosition + 'px';
    naoButton.style.transition = 'top 1s ease-out, left 0.5s ease-out';
}
