
const progress = document.querySelector('.progress')
const progressBar = document.querySelector('.progress-bar')
const progressCircle = document.querySelector('.progress-circle')

let isReadyToDrag = false;

progress.addEventListener('mousedown', () => {
    isReadyToDrag = true
});

document.addEventListener('mousemove', (e) => {
    const clientX = e.clientX;
    const width = progress.getBoundingClientRect().width;
    const left = progress.getBoundingClientRect().left;
    const min = left;
    const max = left + width;


    if(isReadyToDrag && clientX >= min && clientX <= max) {
        const percent = (clientX - left) / width * 100;
        progress.classList.add('dragging');
        progressBar.style.width = percent + '%';
        progressCircle.style.left = percent + '%';

        console.log('title: ', percent);
    }
});

document.addEventListener('mouseup', (e) => {
    isReadyToDrag = false
})