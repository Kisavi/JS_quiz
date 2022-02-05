document.getElementById('stat-button').addEventListener('click', startTest)

function startTest() {
    let x = document.getElementById('container-1');
    let y = document.getElementById('container-2');
        if (x.style.display === 'block') {
            x.style.display = 'none'
            y.style.display = 'block'
        } else {
            document.getElementById('container-1').style.display = 'block'
            document.getElementById('container-2').style.display = 'none'
        }
}

document.getElementById('submit').addEventListener('click', submitTest)

function submitTest() {
    let score = 0;

    let correctAnswers = ['3', '4', '2', '1', '2'];

    for (let i = 0; i < 5; i++) {
        let name = 'question' + (i + 1)
        let answers = document.getElementsByName(name)
        for (let j = 0; j < answers.length; j++) {
            let radio = answers[j]
            if (radio.checked && radio.value === correctAnswers[i]) {
                score++
                break;
            }
        }
    }
}