/*window.addEventListener('load',() => {
    const progress = document.getElementById('progress');
    requestAnimationFrame(update);
});

function update() {
    let Scrrol = window.scrollY;
    let bodyHTML = document.body.scrollHeight;
    let windowLook = window.innerHeight;
    progress.style.width = `${Scrrol/(bodyHTML-windowLook)*100}%`;

    requestAnimationFrame(update);
}*/
let progress = document.getElementById('progress');
function update() {
    let Scrrol = window.scrollY;
    let bodyHTML = document.body.scrollHeight;
    let windowLook = window.innerHeight;
    progress.style.width = `${Scrrol/(bodyHTML-windowLook)*100}%`;
    requestAnimationFrame(update);
}
requestAnimationFrame(update);
