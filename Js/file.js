// declaring variables
const menu = document.getElementById('menu');
const drop = document.getElementById('navy');

function toggleMenu() {
    // Toggle the 'dropped' class on each click
    drop.classList.toggle('dropped');
}

menu.addEventListener('click', toggleMenu);
