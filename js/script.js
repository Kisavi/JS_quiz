document.getElementById('stat-button').addEventListener('click', startTest)

function startTest() {
    let z = document.getElementById('container-1');
    if (z.style.display === 'none') {
        z.style.display = 'block';
    } else {
        z.style.display = 'none';
    }
}

