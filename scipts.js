document.addEventListener('DOMContentLoaded', () => {
    const rollDiceButton = document.getElementById('roll-dice');
    const eventCard = document.getElementById('event-card');
    const submitAnswerButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');

    rollDiceButton.addEventListener('click', () => {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-number').textContent = diceResult;
        
        // Aquí puedes agregar la lógica para mover la ficha del jugador según el resultado del dado
        
        // Muestra la tarjeta de evento y oculta el botón de lanzar dado
        eventCard.classList.remove('hidden');
        rollDiceButton.classList.add('hidden');
    });

    submitAnswerButton.addEventListener('click', () => {
        const eventAnswer = document.getElementById('event-answer').value;
        
        // Aquí puedes agregar la lógica para evaluar la respuesta del jugador y actualizar el tablero según las reglas del juego
        
        // Muestra retroalimentación y oculta la tarjeta de evento y el botón de enviar respuesta
        feedback.classList.remove('hidden');
        feedback.textContent = 'Aquí se mostrará retroalimentación sobre la respuesta del jugador.';
        eventCard.classList.add('hidden');
        submitAnswerButton.classList.add('hidden');
    });
});