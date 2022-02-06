document.getElementById('btn-1').addEventListener('click', startTest)

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

function scoreCalculation() {
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
    document.getElementById('displayScore').innerHTML = score

    if (score <= 2) {
        document.getElementById('comments').innerHTML = 'You have scored poorly and you need to retake the test.'
    } else if (score == 3) {
        document.getElementById('comments').innerHTML = 'You have fairly passed.'
    } else {
        document.getElementById('comments').innerHTML = 'You have passed excellently!!!'
    }
    
    if (score <=2) {
        document.getElementById('btn-3').style.display = 'block'
    } else {
        document.getElementById('btn-3').style.display = 'none'
    }
}

document.getElementById('submit').addEventListener('click', myFunctions);

function submit() {
    let a = document.getElementById('container-2');
    let b = document.getElementById('container-3');
    if (a.style.display === 'block') {
        a.style.display = 'none'
        b.style.display = 'block'
    } else {
        document.getElementById('container-2').style.display = 'block'
        document.getElementById('container-3').style.display = 'none'
    }
}

function myFunctions() {
    scoreCalculation();
    submit();
}

document.getElementById('btn-3').addEventListener('click', retakeTest)

function retakeTest() {
    let a = document.getElementById('container-2');
    let b = document.getElementById('container-3');
    if (b.style.display === 'block') {
        b.style.display = 'none'
        a.style.display = 'block'
    } else {
        document.getElementById('container-2').style.display = 'block'
        document.getElementById('container-3').style.display = 'none'
    }
}
