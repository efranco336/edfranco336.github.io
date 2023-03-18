document.addEventListener('DOMContentLoaded', () => {
    const rollDiceButton = document.getElementById('roll-dice');
    const eventCard = document.getElementById('event-card');
    const submitAnswerButton = document.getElementById('submit-answer');
    const feedback = document.getElementById('feedback');

    let questions = [];

    // Función para cargar las preguntas desde el archivo JSON
    async function loadQuestions() {
        const response = await fetch('questions.json');
        const data = await response.json();
        questions = data;
    }

    // Función para mostrar una pregunta aleatoria
    function showRandomQuestion() {
        const randomIndex = Math.floor(Math.random() * questions.length);
        const randomQuestion = questions[randomIndex];
        document.getElementById('event-question').textContent = randomQuestion.question;
        document.getElementById('event-answer').dataset.correctAnswer = randomQuestion.answer;
    }

    // Llama a la función para cargar las preguntas al cargar la página
    loadQuestions();

    rollDiceButton.addEventListener('click', () => {
        const diceResult = Math.floor(Math.random() * 6) + 1;
        document.getElementById('dice-number').textContent = diceResult;

        // Aquí puedes agregar la lógica para mover la ficha del jugador según el resultado del dado

        // Muestra la tarjeta de evento y oculta el botón de lanzar dado
        eventCard.classList.remove('hidden');
        rollDiceButton.classList.add('hidden');

        // Muestra una pregunta aleatoria en la tarjeta de evento
        showRandomQuestion();
    });

    submitAnswerButton.addEventListener('click', () => {
        const eventAnswer = document.getElementById('event-answer').value;
        const correctAnswer = document.getElementById('event-answer').dataset.correctAnswer;

        // Compara la respuesta del jugador con la respuesta correcta
        if (eventAnswer.trim().toLowerCase() === correctAnswer.toLowerCase()) {
            // La respuesta es correcta, actualiza el juego según las reglas
            feedback.textContent = '¡Respuesta correcta!';
        } else {
            // La respuesta es incorrecta, informa al jugador
            feedback.textContent = `Respuesta incorrecta. La respuesta correcta es ${correctAnswer}.`;
        }

        // Muestra retroalimentación y oculta la tarjeta de evento y el botón de enviar respuesta
        feedback.classList.remove('hidden');
        eventCard.classList.add('hidden');
        submitAnswerButton.classList.add('hidden');
    });
});
