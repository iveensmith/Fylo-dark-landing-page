const openBtn = document.getElementById('open-btn');
const closeBtn = document.getElementById('close-btn');
const menu = document.getElementById('menu');

openBtn.addEventListener('click', () => {
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    menu.classList.add('flex');
    menu.classList.toggle('hidden');
})

closeBtn.addEventListener('click', () => {
    openBtn.classList.toggle('hidden');
    closeBtn.classList.toggle('hidden');
    menu.classList.toggle('hidden');
})