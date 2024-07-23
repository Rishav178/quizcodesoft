const quizzes = [
    { id: 1, title: "Math Quiz" },
    { id: 2, title: "Science Quiz" },
    { id: 3, title: "History Quiz" }
];
function populateQuizList() {
    const quizListContainer = document.getElementById('quizList');

    quizzes.forEach(quiz => {
        const quizItem = document.createElement('div');
        quizItem.classList.add('quiz-item');
        quizItem.innerHTML = `
            <h3>${quiz.title}</h3>
            <a href="quiz.html?id=${quiz.id}" class="btn">Take Quiz</a>
        `;
        quizListContainer.appendChild(quizItem);
    });
}
populateQuizList();
