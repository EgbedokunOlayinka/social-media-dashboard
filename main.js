const checkBox = document.querySelector('#switchBox');
const body = document.querySelector('body');

checkBox.addEventListener("change", turnDark);

function turnDark(e) {
    body.classList.toggle("darkmode");
}
