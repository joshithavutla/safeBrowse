function checkQuiz() {

    let score = 0;

    // Question 1
    let q1 = document.querySelector('input[name="q1"]:checked');

    if (q1 && q1.value === "a") {
        score++;
    }

    // Question 2
    let q2 = document.querySelector('input[name="q2"]:checked');

    if (q2 && q2.value === "b") {
        score++;
    }

    // Question 3
    let q3 = document.querySelector('input[name="q3"]:checked');

    if (q3 && q3.value === "c") {
        score++;
    }

    // Display result
    document.getElementById("quiz-result").innerHTML =
        "Your Score: " + score + " / 3";

}